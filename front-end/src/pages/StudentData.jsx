import React, {useState} from 'react'
import TeacherNav from '../components/TeacherNav'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import {useLocation, Link} from "react-router-dom"
import AdminNav from '../components/AdminNav'

import Footer from '../components/Footer';


function StudentData() {
    const location = useLocation();
    const previousLocation = location.pathname.split("/").slice(0, -1).join("/");
    const userLevel = location.pathname.split("/")[1]
    const username = location.pathname.split("/")[4]

    
    return ( 
        <div className='bg-[#574979] w-full '>
             {userLevel === "teacher"? <TeacherNav />: <AdminNav /> }

            <div className='min-h-screen mx-auto  relative container flex flex-col items-center justify-center'>
                <div className="absolute top-3 left-3 md:top-6 md:left-6 flex items-center gap-2 mt-22 pb-6">
                        <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-white" />
                    <Link to = {previousLocation} className='text-base md:text-xl font-semibold text-white'>Return</Link>
                    {/* Link this button back to TestTable.jsx when click */}
                </div>

                <div className='flex min-w-full md:w-3/4 item-center justify-center mt-20 py-18'> 
                    
                   <div className="w-3/4 flex flex-col items-center justify-center gap-8 bg-white rounded-lg py-8">
                 
                        <h1 className='text-lg md:text-2xl font-medium text-center'>{`${username}'s Response`}</h1>

                        
                        <div className='w-4/5 flex flex-col items-center justify-center gap-8  '>
                            <div className='w-full flex items-center justify-between'>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg '>Username:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly/>
                            </div>

                            <div className='w-full flex items-center justify-between  '>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg text-nowrap'>Full Name:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly/>
                            </div>

                            <div className='w-full flex items-center justify-between  '>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg'>ID:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly />
                            </div>

                            <div className='w-full flex items-center justify-between  '>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg'>Class:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly />
                            </div>

                            <div className='w-full flex items-center justify-between  '>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg'>Email:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly />
                            </div>
                            
                            <div className='w-full flex items-center justify-between  '>
                                <label htmlFor='username' className='font-medium text-sm md:text-lg'>Results:</label>
                                <input className='bg-gray-100 border border-gray-300 py-2 px-4 w-4/5 font-medium text-sm md:text-lg' type="text" id='username' readOnly />
                            </div>



                      
                            

                        </div>

                    </div>



                </div>

            </div>

            <Footer/>

        </div>

      

     );
}

export default StudentData;