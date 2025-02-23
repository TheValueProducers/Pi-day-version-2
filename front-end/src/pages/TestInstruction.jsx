import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"
import StudentNav from "../components/StudentNav";

function TestInstruction() {
    const [page, setPage] = useState("instruction")
    
    

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className=" w-full flex flex-col">

            <StudentNav />

            <div className="w-full md:w-3/4 mx-auto h-screen  flex flex-col items-center justify-center">
                <div className={`w-full md:container lg:max-w-[900px] md:bg-[#D9D9D9] py-8 md:p-12 flex flex-col items ${page === "code" && 'justify-center'}`}>
                            {page === "instruction" && 
                            <div className="flex flex-col items-center justify-center gap-4">
                                <h1 className="font-bold text-center text-3xl">Test Instruction</h1>
                                <p className="text-base text-wrap md:text-lg text-center">You have X amount of time  for this Pi quiz!</p >
                                <p className="text-base text-wrap md:text-lg text-center " >Any acts of cheating is prohibited and will lead to disqualification </p >
                                <p className="text-base text-wrap md:text-lg text-center " >Your screen will be set to full screen after accepting these requirements. Exiting the full screen will lead you to be warned (3 warnings before your quiz is stopped).</p >
                                <p className="text-base text-wrap md:text-lg text-center " >Don't paste anything into the textbox. Any attempts of copy & pasting will lead disqualification</p >
                                <p className="text-base text-wrap md:text-lg text-center " >A cheating detection system is in placed and so DO NOT CHEAT</p >
                                <p className="text-base text-wrap md:text-lg text-center" >Finally, just have fun! You're just reciting Pi numbers</p >
                                <button className=" text-lg md:text-xl font-medium bg-gray-500 text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 " onClick={() => changePage("code")}>Continue</button>
                            </div> }
                            {page === "code" && 
                            <div className="flex flex-col item-center justify-center gap-8">
                                <h1 className="font-bold text-2xl text-center">Enter Code Here</h1>
                                <textarea cols={30} rows={1} className=" bg-white border-2 border-gray-300 mx-auto p-3 text-xl resize-none text-center w-3/4" ></textarea>

                                <Link to = "/student/test" className="w-2/3 mx-auto text-xl font-medium bg-gray-500 text-white max-w[100px] py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 text-center">Start Quiz</Link>
                            </div> }
                            
                </div>

            </div>
            
           
        
            
        </div>
    );
}

export default TestInstruction;