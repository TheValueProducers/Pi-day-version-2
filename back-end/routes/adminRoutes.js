const express = require('express');
const router = express.Router();
const {adminLogin, createAccount, displayAccount} = require("../controllers/AdminController")


router.get("/display-account", displayAccount)
router.post("/create-account", createAccount)
router.post("/login", adminLogin)


module.exports = router;