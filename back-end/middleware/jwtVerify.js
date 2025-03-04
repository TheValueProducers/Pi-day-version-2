const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const verifyToken = (req, res, next) => {

    const token = req.header("Authorization"); 
    

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token." });
    }
};

module.exports = verifyToken;