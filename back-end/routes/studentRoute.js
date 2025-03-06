const express = require('express');
const router = express.Router();
const {finishGame, joinGame, studentLogin, studentRegister} = require("../controllers/StudentController")
const verifyToken = require("../middleware/jwtVerify")

router.post("/register", studentRegister)
router.post("/sign-in", studentLogin)
router.post("/join-game", verifyToken, joinGame)
router.put("/end-game", verifyToken, finishGame )





module.exports = router;

