import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function TestInstruction() {
    const [page, setPage] = useState("instruction")
    
    

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className="w-full  h-screen flex justify-center items-center">
            
           
               
                    <div className={`w-1/2 bg-[#D9D9D9] h-2/3 p-20 flex flex-col items-center ${page === "code" && 'justify-center'}`}>
                        {page === "instruction" && 
                        <>
                            <h1 className="font-bold text-3xl mb-10 ">Test Instruction</h1>
                            <p className="text-lg text-center mb-10">You have X amount of time  for this Pi quiz!
                            Any acts of cheating is prohibited! (why would you even cheat) 
                            Your screen will be set to full screen after accepting these requirements. Exiting the full screen will lead you to be warned (3 warnings before your quiz is stopped).
                            Don't paste anything into the textbox. Any attempts of copy & pasting will stop the quiz.
                            Press the button below to start the quiz
                            After you submitted your answer, wait for further instructions from your teacher
                            Just have fun! (you're just reciting pi numbers, not taking an A-level exam)
                            </p>
                            <button className="text-2xl font-medium bg-gray-500 text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 " onClick={() => changePage("code")}>Submit</button>
                        </> }
                        {page === "code" && 
                        <>
                            <h1 className="font-bold text-3xl mb-10 ">Enter Code Here</h1>
                            <textarea cols={15} rows={1} className="w-3/4 bg-white p-3 text-2xl mb-5" ></textarea>

                            <Link to = "/student/test" className="text-2xl font-medium bg-gray-500 text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 ">Enter Game</Link>
                        </> }
                        
                    </div>

            
        </div>
    );
}

export default TestInstruction;