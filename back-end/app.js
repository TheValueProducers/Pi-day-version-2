const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); 
const app = express();


dotenv.config(); 

const PORT = process.env.PORT || 4000;
const router = require("./routes/index.js");


app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v2", router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});