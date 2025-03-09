import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StudentNav from "../components/StudentNav";
import Footer from "../components/Footer";
import axios from "axios";

function TestInstruction() {
    const navigate = useNavigate();
    const [page, setPage] = useState("instruction");
    const [code, setCode] = useState("");
    const token = localStorage.getItem("token");

    const handleSubmit = async () => {
        if (!token) {
            alert("User is not authenticated. Please log in.");
            return;
        }

        if (!code.trim()) {
            alert("Please enter a valid game code.");
            return;
        }

        try {
            const response = await axios.post(
                "https://pi-day-version-2.onrender.com/api/v2/student/join-game",
                { code }, // ✅ Corrected to send properly
                { headers: { Authorization: `Bearer ${token}` } }
            );

            const game_id = response.data.game_id;
            localStorage.setItem("status", "in_game"); // ✅ Fixed typo "stutus" -> "status"
            localStorage.setItem("game_id", game_id);
            alert("Game joined successfully!");
            navigate(`/student/test/${game_id}`);

        } catch (err) {
            console.error("Error joining game:", err.response?.data || err.message);
            if (err.response?.status === 404) {
                alert("Game not found. Please check the code and try again.");
            } else {
                alert(err.response?.data?.message || "Failed to join game. Please try again.");
            }
        }
    };

    return (
        <div className="w-full flex flex-col bg-[#574979]">
            <StudentNav />
            <div className="w-full md:w-3/4 mx-auto min-h-screen flex flex-col items-center justify-center py-24">
                <div className={`w-full md:container lg:max-w-[900px] py-8 md:p-12 flex flex-col items ${page === "code" && 'justify-center'}`}>
                    {/* 🔹 Instruction Page */}
                    {page === "instruction" && (
                        <div className="flex flex-col items-center justify-center gap-4 md:bg-white/90 md:backdrop-blur-xl py-8 rounded-lg">
                            <h1 className="font-medium text-white md:text-black text-center text-3xl">Test Instructions</h1>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">Recite as many pi numbers as you can in the given textbox.</p>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">The time to do this Pi Quiz will be displayed on the screen.</p>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">Your test will end when either you submit the test, your teacher end the test, or the time runs off</p>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">Don't paste anything into the textbox. Any attempts of copy & pasting will lead to disqualification.</p>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">A cheating detection system is in place, so DO NOT CHEAT.</p>
                            <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">Finally, just have fun! You're just reciting Pi numbers.</p>
                            <button
                                className="bg-[#8E74D0] text-lg md:text-xl font-medium text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500"
                                onClick={() => setPage("code")}
                            >
                                Continue
                            </button>
                        </div>
                    )}

                    {/* 🔹 Code Input Page */}
                    {page === "code" && (
                        <div className="flex flex-col items-center justify-center gap-8">
                            <h1 className="font-medium text-white text-2xl text-center">Enter Code Here</h1>
                            <textarea
                                onChange={(e) => setCode(e.target.value)}
                                value={code}
                                cols={30}
                                rows={1}
                                className="bg-white border-2 border-gray-300 mx-auto p-3 text-xl resize-none text-center w-3/4"
                            ></textarea>

                            <button
                                onClick={handleSubmit}
                                className="w-2/3 mx-auto text-xl font-medium bg-[#8E74D0] text-white max-w[100px] py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out text-center"
                            >
                                Start Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TestInstruction;