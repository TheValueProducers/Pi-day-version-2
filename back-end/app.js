const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-paser");
const app = express();

const PORT = process.env.PORT || 5000;


app.use(borderParser.json())
app.use(borderParser.urlencoded({extended: true}))