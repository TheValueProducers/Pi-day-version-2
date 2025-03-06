import React, {useState, useEffect} from "react";

import {Link, useNavigate} from "react-router-dom"

const SOCKET_SERVER_URL = "http://localhost:4000"; // Update if needed

function Test(){
    const navigate = useNavigate();
    const [socket, setSocket] = useState(null);

    const [outScreen, setOutScreen] = useState({
        out: true,
        attempt: 0
    })
    const [message, setMessage] = useState("Press F To Enter The Test! Please don't escape the screen until the test end.")
    

    useEffect(() => {
        const newSocket = io(SOCKET_SERVER_URL);
        setSocket(newSocket);

        // Listen for "gameEnded" event from the backend
        newSocket.on("gameEnded", () => {
            alert("The test has ended!");
            navigate("/student/home"); // Redirect when test ends
        });

        return () => newSocket.disconnect(); // Cleanup on unmount
    }, [navigate]);

    const changeMessage = (attempt) => {
        if (attempt === 1){
            setMessage(<p>First and Final Warning! Please Return To the Test Now!</p>)
        }else if (attempt === 2){
            setMessage("You've been disqualified from the test!")
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("fullscreenchange", handleEscapeScreen)
            setTimeout(() => navigate("/student/home"), 2000);
        }
    }
    
    const handleEscapeScreen = () => {
        
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement && 
            !document.webkitFullscreenElement && 
            !document.msFullscreenElement){
            
            setOutScreen(prevState => {
                console.log("hello");
                console.log(prevState);
                const newAttempt = prevState.attempt + 1;
                changeMessage(newAttempt);
                return { out: true, attempt: newAttempt };
            })
           
            
        }
    }
    const enterFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen(); // Firefox
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(); // Chrome, Safari, Edge
        } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen(); // IE/Edge
        }
    };
    const handleKeyPress = (event) => {
        if (event.key === "f" || event.key === "F") {
            enterFullScreen();
            setOutScreen(prevState => ({out: false, attempt: prevState.attempt}))
        }
    };

    const preventPaste = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        

        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("fullscreenchange", handleEscapeScreen)
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("fullscreenchange", handleEscapeScreen)
        };
    }, []);

    return(
        
        <div className="relative flex flex-col item-center justify-center w-full bg-[#574979]">
            
            {outScreen.out === true && (<div className="fixed z-50 backdrop-blur-xl h-screen w-full flex justify-center items-center text-center font-bold text-3xl ">{message}</div>)} 
            <div className="flex flex-col item-center justify-center container mx-auto w-full min-h-screen gap-20 py-20">
            <div className="flex w-full justify-center items-center md:justify-start ">
                <div className="border-6 flex justify-center items-center rounded-lg border-[#3b2b63]  text-4xl md:text-5xl  p-2 space-x-2 bg-white md:ml-8">
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                    <span>:</span>
                    <span>0</span>
                    <span>0</span>
                </div>
                
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-12 py-8">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="font-semibold text-center text-white text-2xl ">Enter Your Pi Numbers Here</h1>
                    <h1 className="font-semibold text-center text-white text-2xl ">Good Luck!</h1>

                </div>

                    <textarea cols={16} rows={6} className=" resize-none bg-white p-3 text-xl border-2 border-[#3b2b63] rounded-xl md:w-3/4" onPaste={preventPaste}></textarea>

                     <button className=" bg-[#8E74D0] text-lg md:text-xl font-medium bg- text-white px-8 py-3 rounded-xl cursor-pointer transition-colors duration-400 ease-in-out  ">Submit</button>



            </div>

            </div>

            
        </div>
    )
}

export default Test;