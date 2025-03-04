require("dotenv").config()
const {Teacher, Game, Attempt} = require('../models');

const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const processPiResponses = require("../utils/piAnswerRanking")






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


      

        // ✅ Format duration
       
        // ✅ Create game entry
        const game = await Game.create({
            name,
            duration: totalSeconds,
            teacher_id,
            status: "in_game",
            code
        });
        console.log("almost success");

        // ✅ Check if game was created successfully
        if (!game) {
            console.log("fails");
            return res.status(500).json({ message: "Game creation failed" });
        }
        console.log("success");
        return res.status(201).json({ message: "Game created successfully", game });

    } catch (err) {
        console.error("Error creating game:", err);
        return res.status(500).json({ message: "Game creation failed", error: err.message });
    }
};

exports.showLeaderboard = async (req, res) => {
    try {
        const { name } = req.body; 
        let attempts;

        if (name === "all") {
            // Get all attempts from the table
            attempts = await Attempt.findAll()
            if (!attempts) {
                return res.status(404).json({ error: "Attempts not found" });
            }
            attempts = await processPiResponses(attempts)

        } else {
            // Find the game first, then get its attempts
            const game = await Game.findOne({
                where: { name },
                include: {
                    model: Attempt,
                    as: "attempts"
                }
            });

            if (!game) {
                return res.status(404).json({ error: "Game not found" });
            }

            attempts = await processPiResponses(game.attempts); 
        }

        res.status(200).json({ attempts });

    } catch (err) {
        console.error("Error in showLeaderboard:", err);
        res.status(500).json({ error: "Internal server error" });
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


