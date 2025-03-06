const express = require('express');
const router = express.Router();
const {showGames, showLeaderboard, teacherLogin, startGame, getGameInfo} = require("../controllers/TeacherController")
const verifyToken = require("../middleware/jwtVerify")


router.get("/show-games", verifyToken, showGames)
router.get("/show-leaderboard", verifyToken, showLeaderboard)
router.get("/get-games/:game_id", verifyToken, getGameInfo)
router.post("/sign-in", teacherLogin)
router.post("/start-game", verifyToken, startGame)



module.exports = router;