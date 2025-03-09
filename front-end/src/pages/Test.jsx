import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://pi-day-version-2.onrender.com";

function Test() {
    const navigate = useNavigate();
    const { game_id } = useParams();
    const [answer, setAnswer] = useState("");
    const answerRef = useRef(answer); // ✅ Track latest state
    const [socket, setSocket] = useState(null);
    const token = localStorage.getItem("token");
    const [blur, setBlur] = useState(true);
    const [time, setTime] = useState(0)
    const [username, setUsername] = useState(localStorage.getItem("username"))

    // Update ref whenever answer changes


    useEffect(() => {
        let game_blur = localStorage.getItem("blur");
    
        if (game_blur === null) {
            localStorage.setItem("blur", JSON.stringify(true));
            setBlur(true); // ✅ Ensure state reflects stored value
        } else {
            setBlur(JSON.parse(game_blur)); // ✅ Convert string to boolean
        }
    }, []);
    useEffect(() => {
        answerRef.current = answer;
    }, [answer]);
   

    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        newSocket.emit("joinGame", { game_id, username });

        const handleGameEnded = () => {
            console.log("Game ended, submitting answer:", answerRef.current);
            handleSubmit(answerRef.current); // Pass latest answer
        };

        newSocket.on("gameEnded", handleGameEnded);
        newSocket.on("startGame", () => {
            setBlur(false)
            localStorage.setItem("blur", JSON.stringify(false))
    });
        newSocket.on("updateTime", ({duration}) => setTime(duration) )

        return () => {
            newSocket.off("gameEnded", handleGameEnded)
            newSocket.off("startGame");
            newSocket.disconnect();
        };
    }, [game_id]);

    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const preventPaste = (event) => event.preventDefault();

    const handleSubmit = async (finalAnswer) => {
        console.log("Final Answer Before Submission:", finalAnswer); // ✅ Should log the latest answer

      
        try {
            const response = await axios.put(
                "https://pi-day-version-2.onrender.com/api/v2/student/end-game",
                { game_id, answer: finalAnswer }, // ✅ Ensuring latest answer is sent
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200){
                localStorage.setItem("status", "out_game")
                localStorage.removeItem("game_id")
                localStorage.removeItem("blur")
                navigate("/student/home");
            } 
        } catch (err) {
            console.error("Error submitting game result:", err);
            alert("Error submitting game result: " + err.message);
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full bg-[#574979]">
            {blur && (
                <div className="fixed z-50 backdrop-blur-xl h-screen w-full flex justify-center items-center text-center font-bold text-3xl">
                    Wait for your teacher to start the test
                </div>
            )}
            <div className="flex flex-col items-center justify-center container mx-auto w-full min-h-screen gap-20 py-20">
                <div className="flex w-full justify-center items-center md:justify-start">
                    <div className="border-6 flex justify-center items-center rounded-lg border-[#3b2b63] text-4xl md:text-5xl p-2 space-x-2 bg-white md:ml-8">
                        {formatTime(time)}
                    </div>
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-12 py-8">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="font-semibold text-center text-white text-2xl">Enter Your Pi Numbers Here</h1>
                        <h1 className="font-semibold text-center text-white text-2xl">Good Luck!</h1>
                    </div>

                    <textarea
                        onChange={(e) => {
                            setAnswer(e.target.value);
                            answerRef.current = e.target.value; // ✅ Ensure latest value is captured
                        }}
                        cols={16}
                        rows={6}
                        value={answer}
                        className="resize-none bg-white p-3 text-xl border-2 border-[#3b2b63] rounded-xl md:w-3/4"
                        onPaste={preventPaste}
                    ></textarea>

                    <button
                        onClick={() => handleSubmit(answerRef.current)} // ✅ Pass latest value on manual submit
                        className="bg-[#8E74D0] text-lg md:text-xl font-medium text-white px-8 py-3 rounded-xl cursor-pointer transition-colors duration-400 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Test;
