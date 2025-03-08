require("dotenv").config()
const {Student, Attempt, Game} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET



exports.studentRegister  = async (req,res) => {
    try{
        const {username, password, fullName, email, yearGroup, classGroup} = req.body;
        console.log(username, password, fullName, email, yearGroup, classGroup);
        const salt = await bcrypt.genSalt(10)
        const hashed_password = await bcrypt.hash(password, salt)
        const student = await Student.create({username, hashed_password, full_name: fullName, email, class: `${yearGroup}${classGroup}`})
        res.status(201).json({"message": "successful registration"})
    }catch(err){
        console.error("Registration error:", err); // Log error in the console
        res.status(500).json({"message": err.message || "error registration"});
    }
}

exports.studentLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Login attempt for:", username);

        // Check if user exists
        const student = await Student.findOne({ where: { username } });

        if (!student) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        console.log("Comparing passwords...");
        const passwordMatched = await bcrypt.compare(password, student.hashed_password);
        if (!passwordMatched) {
            return res.status(400).json({ message: "Wrong password" });
        }

        console.log("Generating JWT...");
        const token = jwt.sign({ student_id: student.student_id, role: "student" }, JWT_SECRET);

        console.log("Login successful for:", username);
        return res.status(200).json({ message: "Login successful", token });

    } catch (err) {
        console.error("Login error:", err);
        return res.status(500).json({ message: err.message || "Login failed. Please try again." });
    }
};

exports.joinGame = async (req, res) => {
    try {
        const { code } = req.body;
        const { student_id } = req.user;

        // ✅ Check if game exists
        const game = await Game.findOne({ where: { code } });
        console.log(game);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        const game_id = game.game_id;
        
        // Ensure we await the database query
        const attempt = await Attempt.findOne({ where: { student_id, game_id } });
        console.log(attempt);
        if (attempt) {
            return res.status(403).json({ message: "Student already played the game" });
        }

        // Create a new attempt
        await Attempt.create({ student_id, game_id, status: "in_game" });

        return res.status(201).json({ message: "Game joined successfully", game_id });
    } catch (err) {
        console.error("Error joining game:", err);
        return res.status(500).json({ message: "Failed to join game. Please try again." });
    }
};

exports.finishGame = async (req, res) => {
    try {
        const { student_id } = req.user;
        const { answer, game_id } = req.body;

        console.log("Answer received:", answer);
        console.log("Game ID received:", game_id);

        // Validate game existence
        const game = await Game.findOne({ where: { game_id } });
        if (!game) {
            return res.status(400).json({ message: "Game does not exist" });
        }

        // Update attempt with answer and status
        const updateResult = await Attempt.update(
            { answer, status: "finished" },
            { where: { student_id, game_id } }
        );

        if (updateResult[0] === 0) {
            return res.status(404).json({ message: "No attempt found for this student in the specified game" });
        }

        return res.status(200).json({ message: "Game finished successfully" });
    } catch (err) {
        console.error("Error finishing game:", err);
        return res.status(500).json({ message: "Internal server error. Please try again." });
    }
};


exports.contact = async (req,res) => {

}

