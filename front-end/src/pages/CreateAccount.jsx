import {useState, useEffect} from "react"
import {Link} from "react-router-dom"
const CreateAccount = () => {
   

    
    return(
        <div className="w-full  h-screen flex justify-center items-center">
            <form className="h-2/3 flex flex-col items-center justify-evenly w-3/4 border-1" >
                <h1 className="text-6xl font-bold text-center">Create Account</h1>

                <input type="text" placeholder="Username" className="border-1 w-2/3 h-1/8 text-3xl px-3" />
                <input type="text" placeholder="Password" className="border-1 w-2/3 h-1/8 text-3xl px-3" />
                <input type="text" placeholder="Real Name" className="border-1 w-2/3 h-1/8 text-3xl px-3" />
                <input type="text" placeholder="Email" className="border-1 w-2/3 h-1/8 text-3xl px-3" />
                <button type="submit" className="text-center bg-[#8E74D0] text-3xl w-1/5  text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-[#8E74D0] ">Create</button>
            </form>
        </div>
    )
}

export default CreateAccount;