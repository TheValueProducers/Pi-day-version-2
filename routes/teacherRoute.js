const express = require('express');
const router = express.Router();
const {showGames, showLeaderboard, teacherLogin, startGame, getGameInfo, getStudentInfo} = require("../controllers/TeacherController")
const verifyToken = require("../middleware/jwtVerify")


router.get("/show-games", verifyToken, showGames)
router.post("/show-leaderboard", verifyToken, showLeaderboard)
router.get("/get-games/:game_id", verifyToken, getGameInfo)
router.post("/sign-in", teacherLogin)
router.post("/start-game", verifyToken, startGame)
router.get("/get-student-info/:attempt_id", verifyToken, getStudentInfo)



module.exports = router;