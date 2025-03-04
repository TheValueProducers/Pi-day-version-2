const express = require('express');
const router = express.Router();
const {adminLogin, createAccount, displayAccount, showGames, showLeaderboard} = require("../controllers/AdminController")
const verifyToken = require("../middleware/jwtVerify")


router.get("/display-account", verifyToken, displayAccount)
router.get("/show-leaderboard",verifyToken, showLeaderboard)
router.get("/show-games", verifyToken, showGames)
router.post("/create-account", verifyToken, createAccount)
router.post("/login", adminLogin)



module.exports = router;