require("dotenv").config()
const {Admin, Teacher} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET




exports.adminLogin = async (req,res) => {
    try{
        const {username, password} = req.body;
        const admin = await Admin.findOne({where: {username}})

        if (!admin){
            res.status(400).json({"message": "invalid credentials"})
        }
        const password_matched = await bcrypt.compare(password, admin.password)
        if (!password_matched){
            res.status(400).json({"message": "wrong password"})
        }
        const token  = jwt.sign({admin_id: admin.admin_id, role: "admin"}, JWT_SECRET, {expiresIn: '2h'})
        res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        res.status(500).json({"message": "error registration"})
    }
}



exports.createAccount = async (req,res) => {
    try{
        const {admin_id, username, password, full_name, email, date_of_birth} = req.body;
        const teacher = await Teacher.create({admin_id, username, password, full_name, email, date_of_birth})
        if(!teacher){
            return res.status(500).json({"message": "error creating account"})
        }
        return res.status(200).json({"message": "successfully created accounts"})        

    }catch(err){
        console.log(err);
    }
}

exports.displayAccount = async (req,res) => {
    try{
        const teachers = await Teacher.findAll()
        if(!teacher){
            return res.status(500).json({"message": "accounts not available"})
        }
        return res.status(200).json({"message": "successfully searched accounts", teachers})        

    }catch(err){
        console.log(err);
    }
}