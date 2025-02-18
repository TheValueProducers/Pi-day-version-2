import React from 'react';
import {EyeIcon, EyeSlashIcon, ArrowLongLeftIcon} from '@heroicons/react/24/solid'
import { useState } from "react";



function UserAuth() {
  const [showPassword, setShowPassword] = useState(false);
  
    return ( 
    
        <main className="container mx-auto flex flex-col h-screen items-center justify-center px-4">
        <div className="absolute top-6 left-6 flex items-center gap-2">
        <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-[#8E74D0]" />
        <p className='text-xl font-semibold text-[#8E74D0]'>Home</p>
        </div>


        <div className=" w-3/4 md:w-2/5 flex flex-col md:flex-row items-center justify-center gap-10  rounded-md border-0 lg:border-[1px] md:border-gray-200">
            
            {/* Left Side: Form */}
            <div className="flex flex-col items-center justify-center gap-8 w-full md:w-3/4 min-h-[400px]">
                <header className="text-center">
                    <p className="text-2xl font-semibold -mb-96">Sign In</p>
                    <p className="text-xl font-light">Join the Pi Day challenge! </p>
                </header>

                <section className="w-full">
                    <form className="flex flex-col items-center gap-4">
                    <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="text" placeholder="Enter Your Username" />

                    {/* 🔹 Password Field */}
                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <div className="relative w-full">
                            <input
                                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                                id="newPass"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter Your Password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeIcon className="size-6" /> : <EyeSlashIcon className="size-6" />}
                            </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-full items-center justify-center gap-8'>
                        <div className='flex gap-2'>
                            <input type="radio" name="userType" id="student" />
                            <label htmlFor="student">Student</label>
                        </div>

                        <div className='flex gap-2'>
                            <input type="radio" name="userType" id="teacher" />
                            <label htmlFor="teacher">Teacher</label>
                        </div>
              
                    </div>
                
                    <button className="w-1/2 rounded-sm bg-[#8E74D0] py-2 text-white hover:bg-[#886fc7] text-lg font-medium" type="submit">
                        Sign In
                    </button>
                    </form>
                </section>
            </div>
        </div>
        </main>
     );

}

export default UserAuth;