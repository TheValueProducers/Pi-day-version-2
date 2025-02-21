import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom"

function TestInstruction() {
    const [page, setPage] = useState("instruction")
    
    

    const changePage = (page) => {
        setPage(page)
    }
    return (
        <div className=" w-full md:w-3/4 mx-auto h-screen flex justify-center items-center">
            
           
               
                    <div className={`w-full md:container md:bg-[#D9D9D9] py-8 md:p-12 flex flex-col items ${page === "code" && 'justify-center'}`}>
                        {page === "instruction" && 
                        <div className="flex flex-col items-center justify-center gap-4">
                            <h1 className="font-bold text-center text-3xl">Test Instruction</h1>
                            <p className="text-base md:textlg text-center">You have X amount of time  for this Pi quiz!</p >
                            <p className="text-base md:textlg text-center " >Any acts of cheating is prohibited and will lead to disqualification </p >
                            <p className="text-base md:textlg text-center " >Your screen will be set to full screen after accepting these requirements. Exiting the full screen will lead you to be warned (3 warnings before your quiz is stopped).</p >
                            <p className="text-base md:textlg text-center " >Don't paste anything into the textbox. Any attempts of copy & pasting will lead disqualification</p >
                            <p className="text-base md:textlg text-center " >A cheating detection system is in placed and so DO NOT CHEAT</p >
                            <p className="text-base md:textlg text-center" >Finally, just have fun! You're just reciting Pi numbers</p >
                            <button className="text-2xl font-medium bg-gray-500 text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-gray-500 " onClick={() => changePage("code")}>Start Test</button>
                        </div> }
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