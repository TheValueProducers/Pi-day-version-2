import React, { useState, useEffect } from 'react';
import TeacherNav from '../components/TeacherNav';
import Footer from '../components/Footer';
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import axios from 'axios';
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:4000";

function HostTest() {
    const [code, setCode] = useState("");
    const [time, setTime] = useState(0); // Default to 0 seconds
    const [status, setStatus] = useState(false);
    const [students, setStudents] = useState([]);
    const token = localStorage.getItem("token");
    const { game_id } = useParams();
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate();

    function startGame() {
        setStatus(true);
    }
    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        return () => {
            newSocket.disconnect(); // Cleanup on unmount
        };
    }, []);

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/v2/teacher/get-games/${game_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Send token in headers
                    },
                });

                if (response.status === 200) {
                    setCode(response.data.code);
                    setStudents(response.data.students);
                    setTime(response.data.duration); // Time in seconds
                }
            } catch (err) {
                alert(err);
            }
        };
        fetchGame();
    }, [game_id, token]);

    
    // Timer countdown effect
    useEffect(() => {
        let timer;
        if (status && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime <= 1) {
                        clearInterval(timer);
                        endGame(); // Call endGame when time reaches 0
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [status, time]);

    // Emit event when the game ends
    const endGame = () => {
        setStatus(false);
        if (socket) {
            socket.emit("endGame", { gameId: game_id });
        }
    };;

    // Convert seconds to hh:mm:ss format
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    return (
        <div className="w-full bg-[#574979]">
            <div className="flex flex-col min-h-screen items-center justify-center">
                {status === false &&
                    <div className="w-full relative max-w-5xl flex flex-col items-center justify-center gap-8 py-16 px-6 rounded-lg">
                        {/* Go Back Button */}
                        <div onClick={() => navigate("/teacher/create-test")}
                            className="absolute top-0 left-6 md:top-2 md:left-2 text-sm md:text-xl flex items-center gap-2 cursor-pointer">
                            <ArrowLongLeftIcon className="size-8 text-white" />
                            <p className="text-xl font-semibold text-white">Go Back</p>
                        </div>

                        {/* Start Quiz Button */}
                        <button onClick={startGame}
                            className="absolute top-0 right-6 md:top-2 md:right-6 bg-[#8E74D0] hover:bg-[#7A5EB0] text-white font-medium text-xl py-2 px-6 rounded-lg shadow-md transition"
                        >
                            Start Quiz
                        </button>

                        {/* Game PIN Box */}
                        <div className="w-full bg-white py-10 flex flex-col items-center justify-center gap-8 rounded-lg shadow-lg">
                            <p className="text-center font-medium text-2xl md:text-4xl">Game PIN:</p>
                            <div className="text-center font-bold text-4xl md:text-6xl text-black">
                                {code}
                            </div>
                        </div>

                        {/* Scrollable User Grid */}
                        <div className="w-full max-w-5xl h-[400px] overflow-y-auto border-[0] rounded-lg p-4 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {students.length > 0 && students.map((student, index) => (
                                    <div
                                        key={index}
                                        className="p-6 bg-[#352374] rounded-lg text-center text-white font-medium text-2xl flex items-center justify-center h-20 overflow-hidden"
                                    >
                                        <p className="w-full px-2 text-ellipsis overflow-hidden whitespace-nowrap">
                                            {student.username}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }

                {status === true &&
                    <div className="w-full relative max-w-5xl flex flex-col items-center justify-center gap-8 py-16 px-6 rounded-lg">
                        {/* Timer Display */}
                        <div className="border-8 flex justify-center items-center rounded-lg border-[#3b2b63] text-5xl md:text-7xl lg:text-8xl p-4 md:p-6 space-x-3 bg-white shadow-md">
                            {formatTime(time)}
                        </div>

                        {/* End Test Button */}
                        <button
                            onClick={() => setStatus(false)}
                            className="mt-6 bg-[#E63946] hover:bg-[#C5283D] text-white font-semibold text-lg md:text-2xl py-3 px-8 rounded-lg shadow-lg transition"
                        >
                            End Quiz
                        </button>
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
}

export default HostTest;