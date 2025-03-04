require("dotenv").config()
const {Student, Attempt, Game} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET



exports.studentRegister  = async (req,res) => {
    try{
        const {username, password, fullName, email, yearGroup, classGroup} = req.body;
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        const student = await Student.create({username, hashed_password, full_name: fullName, email, class: `${yearGroup}${classGroup}`})
        res.status(201).json({"message": "successful registration"})
    }catch(err){
        res.status(500).json({"message": "error registration"})
    }
}

exports.studentLogin = async (req,res) => {
    try{
        const {username, password} = req.body;
        const student = await Student.findOne({where: {username}})

        if (!student){
            return res.status(400).json({"message": "invalid credentials"})
        }
        console.log("Im at password compare");
        const password_matched = await bcrypt.compare(password, student.hashed_password)
        console.log("Im after password compare");
        if (!password_matched){
            return res.status(400).json({"message": "wrong password"})
        }
        console.log("I'm here");
        const token  = jwt.sign({student_id: student.student_id, role: "student"}, JWT_SECRET)
        return res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        return res.status(500).json({"message": "error registration"})
    }
}


exports.joinGame = async (req, res) => {
    try {
        const { code, student_id } = req.body;
        

        // ✅ Check if game exists
        const game = await Game.findOne({ where: { code } });
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        // ✅ Check if student is already in the game
        

        

        return res.status(200).json({ message: "Game joined successfully", game });

    } catch (err) {
        console.error("Error joining game:", err);
        return res.status(500).json({ message: "Failed to join game. Please try again." });
    }
};

exports.finishGame = async (req,res) => {
    try{
        const {student_id, answer, code} = req.body;
        const game = await Game.findOne({where: {code}})
        if (!game){
            res.status(400).json({"message": "game does not exist"})
        }

       await Attempt.create({student_id, answer, game: game.game_id})

        res.status(200).json({"message": "game joined successfully"})


    }catch(err){
        console.log(err);
    }
}

exports.contact = async (req,res) => {

}

