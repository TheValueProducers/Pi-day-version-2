const express = require('express');
const router = express.Router();
const adminRouter = require("./adminRoutes")
const studentRouter = require("./studentRoute")
const teacherRouter = require("./teacherRoute")



router.use("/admin", adminRouter)

router.use("/student", studentRouter)

router.use("/teacher", teacherRouter)



module.exports = router