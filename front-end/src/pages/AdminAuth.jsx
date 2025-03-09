import React from 'react';
import {EyeIcon, EyeSlashIcon} from '@heroicons/react/24/solid'
import { useState } from "react";

import Footer from "../components/Footer"
import GeneralNav from "../components/GeneralNav"
import axios from "axios";



function AdminAuth() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const logIn = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const response = await axios.post("https://pi-day-version-2.onrender.com/api/v2/admin/login", {
        username,
        password
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token); // Store JWT
        console.log("Login successful!", response.data);
        window.location.href = "/admin/home"; // Redirect after login
      }
    } catch (error) {
      
        alert("Wrong password, please try again");
      
    }
  };
  
    return ( 
        <div className='w-full bg-white'>
        
        <GeneralNav />
        
        <main className="relative container mx-auto flex flex-col min-h-screen items-center justify-center px-4">
                <div className=" w-3/4 md:w-2/5 flex flex-col md:flex-row items-center justify-center gap-10  rounded-md border-0 lg:border-[1px] md:border-gray-200">
                    
                    {/* Left Side: Form */}
                    <div className="flex flex-col items-center justify-center gap-8 w-full md:w-3/4 min-h-[400px]">
                        <header className="text-center">
                            <p className="text-xl md:text-2xl font-semibold">Admin Login</p>
                            <p className="text-lg md:text-xl font-light">Admin? More like Sadmin <span>🤣</span></p>
                        </header>

                        <section className="w-full">
                            <form className="flex flex-col items-center gap-4">
                            <input onChange={(e) => setUsername(e.target.value)} className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0] placeholder:md:text-base placeholder:text-sm" type="text" placeholder="Enter Your Username" />

                            {/* 🔹 Password Field */}
                            <div className="w-full flex flex-col gap-4">
                                <div className="w-full flex flex-col gap-2">
                                    <div className="relative w-full">
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0] placeholder:md:text-base placeholder:text-sm"
                                        id="newPass"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Your Password"
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeIcon className="size-4 md:size-6" /> : <EyeSlashIcon className="size-6" />}
                                    </button>
                                    </div>
                                </div>
                            </div>
                        
                            <button onClick={logIn} className="w-1/2 rounded-sm bg-[#8E74D0] py-2 text-white hover:bg-[#886fc7] text-sm md:text-lg font-medium" type="submit">
                                Sign In
                            </button>
                            </form>
                        </section>
                    </div>
                </div>
            </main> 
        

            <Footer/>
        </div>
     );

}

export default AdminAuth;