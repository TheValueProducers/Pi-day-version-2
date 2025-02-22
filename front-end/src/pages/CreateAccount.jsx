import {useState, useEffect} from "react"
import {Link, useNavigate} from "react-router-dom"
import { ArrowLongLeftIcon} from '@heroicons/react/24/solid'
const CreateAccount = () => {

    const navigate = useNavigate();
   

    
    return(
        <div className="bg-[#574979]">
              <div onClick={() => navigate("/admin/manage-account")} className="absolute top-3 left-3 text-sm md:text-xl  md:top-6 md:left-6 flex items-center gap-2">
                <ArrowLongLeftIcon  className="size-8 text-pr font-semibold text-white" />
                <p className='text-xl font-semibold text-white'>Go Back</p>
            </div>
            <div className="w-full h-screen mx-auto container flex justify-center items-center">
                <form className="flex flex-col items-center justify-evenly w-1/2 md:bg-white gap-8 py-8" >
                    <h1 className="text-3xl font-medium text-center text-white md:text-black text-nowrap">Create Account</h1>
                    <div className=" w-full flex flex-col items-center justify-center gap-8">
                        <input type="text" placeholder="Username" className="border-1 text-xl px-4 py-2 bg-white md:w-2/3" />
                        <input type="text" placeholder="Password" className="border-1 text-xl px-4 py-2 bg-white  md:w-2/3 " />
                        <input type="text" placeholder="Real Name" className="border-1 text-xl px-4 py-2 bg-white  md:w-2/3" />
                        <input type="text" placeholder="Email" className="border-1 text-xl px-4 py-2 bg-white  md:w-2/3" />
                        <button type="submit" className="text-center bg-[#8E74D0] text-lg md:text-xl font-medium text-nowrap  text-white px-8 py-2 rounded-lg cursor-pointer hover:bg-white transition-colors duration-400 ease-in-out hover:text-[#8E74D0] ">Create Account</button>
                    </div>

                </form>
            </div>

        </div>

    )
}

export default CreateAccount;