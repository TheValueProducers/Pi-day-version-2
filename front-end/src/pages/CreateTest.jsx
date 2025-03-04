import React, {useState, useEffect} from 'react'
import TeacherNav from '../components/TeacherNav'
import Footer from '../components/Footer';
import {Navigate} from "react-router-dom"
import { generateRandomCode } from '../utils/utils';
import axios from 'axios';


function CreateTest() {




    const token = localStorage.getItem("token")
    const [formData, setFormData] = useState({
        name: "",
        hour: "",
        minute: "",
        second: "",
        code: generateRandomCode()
    })


    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevValue => ({...prevValue, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isNaN(formData.hour) || isNaN(formData.minute) || isNaN(formData.second)) {
            alert("Time duration must be numbers!");
            return;
        }
    
        try {
            // ✅ Log formData to check if values are correct before submitting
            console.log("Submitting form:", formData);
    
            const response = await axios.post(
                "http://localhost:4000/api/v2/teacher/start-game",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // ✅ Send token in headers
                    }

                }
                
                
            );
    
            if (response.status === 201) {
                alert("Game started successfully!");
                <Navigate to = "/teacher/dashboard" />
            } else {
                alert("Unexpected response. Please try again.");
            }
    
        } catch (err) {
            console.error("Error starting the game:", err.response?.data || err.message);
            alert("Failed to start game. Please check your input.");
        }
    };

                                // <div>
                                //     <div className="flex flex-col w-full justify-center items-center gap-8 ">

                                //         <div className="border-6 flex justify-center items-center rounded-lg border-[#3b2b63] py-8 px-8  text-4xl md:text-6xl p-2  bg-white">
                                //             <span>0</span>
                                //             <span>0</span>
                                //             <span>:</span>
                                //             <span>0</span>
                                //             <span>0</span>
                                //             <span>:</span>
                                //             <span>0</span>
                                //             <span>0</span>
                                //         </div>

                                //         <button className="w-full bg-[#8E74D0] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#7A5EB0] transition">
                                //             Start Quiz
                                //         </button>
                                //     </div>
                                // </div>
    

    return ( 
        <div className='w-full bg-[#574979]'>
            <TeacherNav />
                <div className='flex flex-col min-h-screen items-center justify-center'>
                    <div className='flex container item-center justify-center py-24 '>         
                        
                            <div className="w-full max-w-lg flex flex-col items-center justify-center gap-8  py-12 px-6  md:bg-white md:shadow-lg rounded-lg">
                                {/* Title */}
                                <h2 className="font-semibold text-center text-3xl text-white md:text-gray-800">Create Test</h2>

                                {/* Form */}
                                <form className="w-full flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
                                    
                                    {/* Test Name */}
                                    <div className="flex flex-col">
                                    <label className="text-lg font-medium text-white md:text-gray-700">Test Name</label>
                                    <input
                                        type="text"
                                        placeholder="E.g. 10 - MaPink"
                                        className="mt-2 px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                        onChange={(e) => handleChange(e)}
                                        name = "name"
                                        

                                    />
                                    </div>

                                    {/* Duration Fields */}
                                    <div className="flex flex-col gap-3">
                                    <label className="text-lg font-medium text-white md:text-gray-700">Duration</label>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="flex flex-col">
                                        <label className="text-sm text-white md:text-gray-600">Hours</label>
                                        <input
                                            name="hour"
                                            type="text"
                                            maxLength={2}
                                            className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        </div>
                                        <div className="flex flex-col">
                                        <label className="text-sm text-white md:text-gray-600">Minutes</label>
                                        <input
                                            maxLength={2}
                                            type="text"
                                            name="minute"
                                            className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        </div>
                                        <div className="flex flex-col">
                                        <label className="text-sm text-white md:text-gray-600">Seconds</label>
                                        <input
                                            maxLength={2}
                                            type="text"
                                            name="second"
                                            className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                            onChange={(e) => handleChange(e)}
                                            required
                                        />
                                        </div>
                                    </div>
                                    </div>

                                    {/* Test Code */}
                                    <div className="flex flex-col">
                                    <label className="text-lg font-medium text-white md:text-gray-700">Test Code</label>
                                    <p className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-center font-semibold text-lg text-gray-800">
                                        {formData.code}
                                    </p>
                                    </div>

                                    {/* Start Button */}
                                    <button className="w-full bg-[#8E74D0] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#7A5EB0] transition">
                                    Host Quiz
                                    </button>
                                </form>
                            </div>  
                    




                    </div>     
                </div>
            <Footer/>
        </div>
     );
}

export default CreateTest;