require("dotenv").config()
const {Admin, Teacher, Attempt, Game} = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET




exports.adminLogin = async (req,res) => {
    try{
        
        const {username, password} = req.body;
        console.log(username, password);
        const admin = await Admin.findOne({ where: { username } });
        console.log("Finding Identity");
        console.log(admin);

        if (!admin){
            return res.status(400).json({"message": "invalid credentials"})
        }
        const password_matched = await bcrypt.compare(password, admin.hashed_password)
        if (!password_matched){
            return res.status(400).json({"message": "wrong password"})
        }
        console.log("Correct identiy");
        const token  = jwt.sign({admin_id: admin.admin_id, role: "admin"}, JWT_SECRET)
        return res.status(200).json({message: "login successful", token})
        
        
    }catch(err){
        return res.status(500).json({"message": "error registration"})
    }
}



exports.createAccount = async (req,res) => {
    try{
        const {username, password, full_name, email} = req.body;
        const {admin_id} = req.user
        const teacher = await Teacher.create({admin_id, username, password, full_name, email})
        if(!teacher){
            return res.status(500).json({"message": "error creating account"})
        }
        return res.status(201).json({"message": "successfully created accounts"})        

    }catch(err){
        console.log(err);
    }
}

exports.displayAccount = async (req,res) => {
    try{
        const teachers = await Teacher.findAll()
        console.log("Im here");
        if(!teachers){
            
            
            return res.status(500).json({"message": "accounts not available"})
        }
        return res.status(201).json({"message": "successfully searched accounts", teachers})        

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

exports.showGames = async (req, res) => {
    try {
        

        const games = await Game.findAll();

        return res.status(200).json({ message: "Successfully retrieved games", games });
    } catch (err) {
        console.error("Error fetching games:", err);
        return res.status(500).json({ message: "Error retrieving games" });
    }
};


