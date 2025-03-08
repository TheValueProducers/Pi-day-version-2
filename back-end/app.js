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

let students = []; // Array to track game sessions and participants

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

    // Start a new game session
    // socket.on("startGame", ({ gameId }) => {
    //     students.push({ game_id: gameId, students: [] });
    //     io.to(gameId).emit("startGame");
    // });

    socket.on("startGame", ({ gameId, duration }) => {
        let gameSession = students.find((session) => session.game_id === gameId);
    
        if (!gameSession) {
          gameSession = { game_id: gameId, students: [], duration, timer: null };
          students.push(gameSession);
        } else {
          // Reset the game session if it already exists
          gameSession.students = [];
          gameSession.duration = duration;
        }
    
        // Clear any existing timer before starting a new one
        if (gameSession.timer) {
          clearInterval(gameSession.timer);
        }
    
        console.log(`Game ${gameId} started with duration: ${duration} seconds.`);
        io.to(gameId).emit("startGame");
    
        // Start the countdown timer
        gameSession.timer = setInterval(() => {
          if (gameSession.duration > 0) {
            gameSession.duration = gameSession.duration - 1;
            console.log(gameSession.duration);
            io.to(gameId).emit("updateTime", { duration: gameSession.duration });
          } else {
            clearInterval(gameSession.timer); // Stop timer when it reaches 0
            io.to(gameId).emit("gameEnded", { gameId });
    
            // Remove the game session from memory
            students = students.filter((session) => session.game_id !== gameId);
          }
        }, 1000);
      });

    // Player joins a game session
    socket.on("joinGame", ({ game_id, username }) => {
        socket.join(game_id);
        console.log(username);
    
        // Check if the game session already exists
        let gameSession = students.find(session => session.game_id === game_id);
    
        if (!gameSession) {
            // Create a new game session if it doesn't exist
            gameSession = { game_id, students: [username] };
            students.push(gameSession);
            console.log(`New game session created: ${game_id}`);
        } else {
            // Prevent duplicate entries
            if (!gameSession.students.includes(username)) {
                gameSession.students.push(username);
            } else {
                console.log(`User '${username}' is already in game ${game_id}`);
                return;
            }
        }
        io.to(game_id).emit("studentInfo", { info: gameSession.students });
    
        console.log(`User '${username}' joined game ${game_id}`);
        console.log(students);
    
       
    });

    // Host joins and retrieves student info
    socket.on("hostJoin", ({ gameId }) => {
        socket.join(gameId);
        console.log(`Host joined game ${gameId}`);

        
        
    });

    // End game event
    // End game event
    socket.on("endGame", ({ gameId }) => {
        console.log(`Game ${gameId} has ended.`);
        io.to(gameId).emit("gameEnded", { gameId });
    
        // Find the game session before removing it
        let gameSessionIndex = students.findIndex(session => session.game_id === gameId);
    
        if (gameSessionIndex !== -1) {
            let gameSession = students[gameSessionIndex];
    
            // ✅ Clear the interval if it exists
            if (gameSession.timer) {
                clearInterval(gameSession.timer);
                console.log(`Timer for game ${gameId} cleared.`);
            }
    
            // ✅ Remove game session from memory
            students.splice(gameSessionIndex, 1);
        } else {
            console.warn(`Game ${gameId} not found when attempting to end.`);
        }
    });

    // socket.on("startTime", ({ duration, gameId }) => {
    //     let gameSession = students.find((session) => session.game_id === gameId);
    
    //     if (!gameSession) {
    //       console.error(`Game ${gameId} not found.`);
    //       return;
    //     }
    
    //     // Ensure previous timer is cleared before starting a new one
    //     if (gameSession.timer) {
    //       clearInterval(gameSession.timer);
    //     }
    
    //     gameSession.duration = duration;
    
    //     console.log(`Game ${gameId} started with duration: ${duration} seconds.`);
    
    //     // Start a new timer for this game session
    //     gameSession.timer = setInterval(() => {
    //       if (gameSession.duration > 0) {
    //         gameSession.duration -= 1;
    //         io.to(gameId).emit("updateTime", { duration: gameSession.duration });
    //       } else {
    //         clearInterval(gameSession.timer); // Stop timer when it reaches 0
    //         io.to(gameId).emit("gameEnded", { gameId });
    
    //         // Remove game session from memory
    //         students = students.filter((session) => session.game_id !== gameId);
    //       }
    //     }, 1000);
    //   });
    // Handle client disconnect
    socket.on("disconnect", () => {
        console.log(`Client disconnected: ${socket.id}`);
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});