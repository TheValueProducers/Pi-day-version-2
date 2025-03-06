import React, {useState, useEffect} from "react";
import {Link, Navigate} from "react-router-dom"
import StudentNav from "../components/StudentNav";
import Footer from "../components/Footer"
import axios from "axios";


function TestInstruction() {
    const [page, setPage] = useState("instruction")
    const [code, setCode] = useState("")
    const token = localStorage.getItem("token")

    const handleSubmit = async () => {
        try {
            if (!token) {
                alert("User is not authenticated. Please log in.");
                return;
            }
    
            const response = await axios.post(
                "http://localhost:4000/api/v2/student/join-game",
                {code}, // Empty body
                { headers: { Authorization: `Bearer ${token}` } }
            );

            if (response.status === 404){
                alert("Game is not found")
                return
            }
    
            if (response.status === 201) {
                alert("Game joined successfully");
                const game_id = response.data.game_id;
                window.location.href = `/student/test/${game_id}`; // Or use navigate()
            }
    
        } catch (err) {
            console.error("Error joining game:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to join game. Please try again.");
        }
    };
    
    
    

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className=" w-full flex flex-col bg-[#574979]">

            <StudentNav />

            <div className="w-full md:w-3/4 mx-auto min-h-screen  flex flex-col items-center justify-center py-24">
                <div className={`w-full md:container lg:max-w-[900px]  py-8 md:p-12 flex flex-col items ${page === "code" && 'justify-center'}`}>
                            {page === "instruction" && 
                            <div className="flex flex-col items-center justify-center gap-4 md:bg-white/90 md:backdrop-blur-xl py-8 rounded-lg ">
                                <h1 className="font-medium text-white md:text-black text-center text-3xl">Test Instruction</h1>
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center">You have X amount of time  for this Pi quiz!</p >
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center " >Any acts of cheating is prohibited and will lead to disqualification </p >
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center " >Your screen will be set to full screen after accepting these requirements. Exiting the full screen will lead you to be warned (3 warnings before your quiz is stopped).</p >
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center " >Don't paste anything into the textbox. Any attempts of copy & pasting will lead disqualification</p >
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center " >A cheating detection system is in placed and so DO NOT CHEAT</p >
                                <p className="text-base text-white md:text-black text-wrap md:text-lg text-center" >Finally, just have fun! You're just reciting Pi numbers</p >
                                <button className=" bg-[#8E74D0] text-lg md:text-xl font-medium bg- text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 " onClick={() => changePage("code")}>Continue</button>
                            </div> }
                            
                            {page === "code" && 
                            <div className="flex flex-col item-center justify-center gap-8">
                                <h1 className="font-medium text-white text-2xl text-center">Enter Code Here</h1>
                                <textarea onChange = {e => setCode(e.target.value)} cols={30} rows={1} className=" bg-white border-2 border-gray-300 mx-auto p-3 text-xl resize-none text-center w-3/4" ></textarea>

                                <button  onClick={() => handleSubmit()} className="w-2/3 mx-auto text-xl font-medium bg-[#8E74D0] text-white max-w[100px] py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out text-center">Start Quiz</button>
                            </div> }
                            
                    
                </div>

            </div>

            <Footer/>


            
            
           
        
            
        </div>
    );
}

export default TestInstruction;