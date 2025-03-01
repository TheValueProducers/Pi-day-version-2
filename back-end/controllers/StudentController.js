require("dotenv").config()
const {Student, Attempt, Game} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET



exports.studentRegister  = async (req,res) => {
    try{
        const {username, password, full_name, email, date_of_birth} = req.body;
        const salt = await bcrypt.genSalt(13)
        const hashed_password = await bcrypt.hash(password, salt)
        const student = await Student.create({username, hashed_password, full_name, email, date_of_birth})
        res.status(200).json({"message": "successful registration"})
    }catch(err){
        res.status(500).json({"message": "error registration"})
    }
}

exports.studentLogin = async (req,res) => {
    try{
        const {username, password} = req.body;
        const student = await Student.findOne({where: {username}})

        if (!student){
            res.status(400).json({"message": "invalid credentials"})
        }
        const password_matched = await bcrypt.compare(password, student.password)
        if (!password_matched){
            res.status(400).json({"message": "wrong password"})
        }
        const token  = jwt.sign({student_id: student.student_id, role: "student"}, JWT_SECRET)
        res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        res.status(500).json({"message": "error registration"})
    }
}


exports.joinGame = async (req, res) => {
    try{
        const {code} = req.body;
        const game = await Game.findOne({where: {code}})
        if (!game){
            res.status(400).json({"message": "game does not exist"})
        }

        res.status(200).json({"message": "game joined successfully"})


    }catch(err){
        console.log(err);
    }
}

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

