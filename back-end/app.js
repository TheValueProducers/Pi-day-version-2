const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); 
const { Server } = require("socket.io");

dotenv.config(); 

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;
const router = require("./routes/index.js");

// Configure CORS
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// Use API routes
app.use("/api/v2", router);

// Initialize Socket.io
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    // Listen for game end
    socket.on("endGame", ({ gameId }) => {
        console.log(`Game ${gameId} has ended.`);
        io.to(gameId).emit("gameEnded", ({ gameId })); 
    });

    socket.on("startGame", ({gameId}) => {
        io.to(gameId).emit("startGame")
    })

    socket.on("joinGame", ({game_id}) => {
        socket.join(game_id)
        console.log(`Room ${game_id} is joined successfully`);
        
    })

    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});