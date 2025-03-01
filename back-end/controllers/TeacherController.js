require("dotenv").config()
const {Teacher, Game, Attempt} = require('../models');

const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET;
const processPiResponses = require("../utils/piAnswerRanking")




exports.teacherLogin = async (req,res) => {
    try{
        const {username, password} = req.body;
        const teacher = await Teacher.findOne({where: {username}})

        if (!teacher){
            res.status(400).json({"message": "invalid credentials"})
        }
        const password_matched = password === teacher.password;
        if (!password_matched){
            res.status(400).json({"message": "wrong password"})
        }
        const token  = jwt.sign({teacher_id: teacher.teacher_id, role: "teacher"}, JWT_SECRET)
        res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        res.status(500).json({"message": "error registration"})
    }
}


exports.startGame = async (req, res) => {
    try{
        const {name, duration, teacher_id, code} = req.body;
        const game = await Game.create({name, duration, teacher_id, status: "in_game", code})
        if (!game){
            res.status(500).json({"message": "game fails to create"})
        }
        res.status(200).json({"message": "game created successful"})


    }catch(err){
        console.log(err);
    }
}

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

exports.showGames = async (req,res) => {
    try{
        const {teacher_id} = req.body
        const games = await Game.findAll({where: {teacher_id} })
        res.status(200).json({"message": "successfully find games"})
    }catch(err){
        console.log(err);
    }


}


