require("dotenv").config()
const {Teacher, Game, Attempt, Student} = require('../models');

const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const {Op} = require("sequelize")
const processPiResponses = require("../utils/piAnswerRanking");







exports.teacherLogin = async (req,res) => {
    try{
        const {username, password} = req.body;
        console.log(username, password);
        const teacher = await Teacher.findOne({where: {username}})

        if (!teacher){
            return res.status(400).json({"message": "invalid credentials"})
        }
        const password_matched = password === teacher.password;
        if (!password_matched){
            return res.status(400).json({"message": "wrong password"})
        }
        console.log(teacher.teacher_id);
        const token  = jwt.sign({teacher_id: teacher.teacher_id, role: "teacher"}, JWT_SECRET)
        return res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        return res.status(500).json({"message": "error registration"})
    }
}


exports.startGame = async (req, res) => {
    try {
        const { name, hour, minute, second, code } = req.body;
        const {teacher_id} = req.user
        console.log(name, hour, minute, second, teacher_id, code);
        const totalSeconds =
        Number(hour) * 3600 +
        Number(minute) * 60 +
        Number(second);


        const checkNameUnique = await Game.findOne({where: {name}})

        if(checkNameUnique){
            res.status(400).json({message: "Game Name Already Existed"})
        }
      
        const game = await Game.create({
            name,
            duration: totalSeconds,
            teacher_id,
            status: "in_game",
            code
        });

        
     

        // ✅ Check if game was created successfully
        if (!game) {
            console.log("fails");
            return res.status(500).json({ message: "Game creation failed" });
        }
        
        console.log("success");
        return res.status(201).json({ message: "Game created successfully", game_id: game.game_id });

    } catch (err) {
        console.error("Error creating game:", err);
        return res.status(500).json({ message: "Game creation failed", error: err.message });
    }
};

exports.showLeaderboard = async (req, res) => {
    try {
        console.log("Im here");
        const { game_id } = req.body; 
        console.log("Received game_id:", game_id);
        let attempts;

        if (!game_id) {
            return res.status(400).json({ error: "game_id is required" });
        }

        if (game_id === "all") {
            // ✅ Get all attempts with non-null and non-empty answers
            attempts = await Attempt.findAll({
                where: {
                    answer: {
                        [Op.and]: [
                            { [Op.ne]: null }, // `answer IS NOT NULL`
                            { [Op.ne]: "" }    // `answer != ''`
                        ]
                    }
                },
                include: {
                    model: Student,
                    as: "students"

                }
            });

            attempts = attempts.map(attempt => ({
                ...attempt.toJSON(), // ✅ Convert Sequelize object to JSON
                username: attempt.students?.username // ✅ Retrieve username from Student association
            }));
            console.log(attempts);
            
            

            if (!attempts.length) {
                return res.status(404).json({ error: "No valid attempts found" });
            }

            attempts = await processPiResponses(attempts);
            console.log(attempts);
            
        } else {
            // ✅ Find the game
            const game = await Game.findOne({
                where: { game_id },
                include: [
                    {
                        model: Attempt,
                        as: "attempts", // ✅ Ensure alias matches the association
                        required: false, // ✅ Ensure game is fetched even if no attempts exist
                        include: [
                            {
                                model: Student,
                                as: "students", // ✅ Ensure alias matches Attempt -> Student association
                                attributes: ["username"]
                            }
                        ],
                        where: {
                            answer: {
                                [Op.and]: [
                                    { [Op.ne]: null }, // ✅ `answer IS NOT NULL`
                                    { [Op.ne]: "" }    // ✅ `answer != ''`
                                ]
                            }
                        }
                    }
                ]
            });
            

            if (!game) {
                return res.status(404).json({ error: "Game not found" });
            }

            if (!game.attempts.length) {
                return res.status(404).json({ error: "No valid attempts for this game" });
            }
            attempts = game.attempts.map((attempt) => ({
                ...attempt.toJSON(), // ✅ Convert Sequelize object to JSON
                username: attempt.students?.username // ✅ Retrieve username from Student association
            }) )
            attempts = await processPiResponses(attempts);
        }

        res.status(200).json({ attempts });

    } catch (err) {
        console.error("Error in showLeaderboard:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getGameInfo = async (req, res) => {
    try {
        let { game_id } = req.params; // Extract game_id from request parameters
        game_id = game_id.replace(/^:/, ""); 

        console.log(game_id);
        
        const game = await Game.findOne({where: {game_id}, include: Student })
        
        

        // ✅ Check if the game exists
        if (!game) {
            return res.status(404).json({ message: "No students found" });
        }

        return res.status(200).json({ message: "Game fetched successfully", students: game.Students, code: game.dataValues.code, duration: game.dataValues.duration });

    } catch (err) {
        console.error("Error fetching game:", err);
        return res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
};

exports.showGames = async (req, res) => {
    try {
        const { teacher_id } = req.user; // Extract from JWT middleware
        
        if (!teacher_id) {
            return res.status(400).json({ message: "Missing teacher_id" });
        }

        const games = await Game.findAll({ where: { teacher_id } });

        return res.status(200).json({ message: "Successfully retrieved games", games });
    } catch (err) {
        console.error("Error fetching games:", err);
        return res.status(500).json({ message: "Error retrieving games" });
    }
};

exports.endGame = async (req,res) => {
    try{
        const {game_id} = req.params;
        if (!game_id){
            res.status(404).json({"message": "Game does not exist"})
        }
        const updatedGame = await Game.update({status: "finished", where: {game_id} })

        res.status(200).json({message: "Game ended successfully"})

        

    }catch(err){
        console.log(err);
        res.status(500).json({message: "Error processing end game"})
    }
}

exports.getStudentInfo = async (req,res) => {
    try{
        const {game_id, username} = req.params;
        const student = await Student.findOne({where: {username}})
        const result = await Attempt.findOne({
            where: {game_id, student_id: student.student_id}
        })
        res.status(201).json({student, result})

    }catch(err){
        console.log(err);
        res.status(500).json({message: err})
    }
}


