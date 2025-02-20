import React, {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom"


function Test(){
    const navigate = useNavigate()
    const [outScreen, setOutScreen] = useState({
        out: true,
        attempt: 0
    })
    const [message, setMessage] = useState("Press F To Enter The Test! Please don't escape the screen until the test end.")
    
    const changeMessage = (attempt) => {
        if (attempt === 1){
            setMessage("First and Final Warning! Please Return To the Test Now!")
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
        <div className="h-screen">
            {outScreen.out === true && (<div className="fixed z-50 backdrop-blur-md h-screen w-full flex justify-center items-center text-center font-bold text-7xl px-50">{message}</div>)} 
            <div className="pl-20 w-full">
                <div className="border-8 flex justify-center items-center rounded-2xl border-black text-5xl w-3/12 p-2 space-x-2 bg-white">
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
            <div className="w-full h-8/10 flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl mb-10 ">Enter Your Pi Numbers Here. Good Luck!</h1>
                <textarea className="w-3/5 bg-white p-3 text-2xl mb-5 border-2 border-black rounded-2xl h-1/2" onPaste={preventPaste}></textarea>

            </div>
            
        </div>
    )
}

export default Test;