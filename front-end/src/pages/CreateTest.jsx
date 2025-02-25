import React from 'react'
import TeacherNav from '../components/TeacherNav'

function CreateTest() {
    return ( 
        <div className='bg-[#574979] w-full h-screen '>
            <TeacherNav />
            <div className='flex flex-col h-4/5 items-center justify-center'>
                <div className='flex container item-center justify-center'>         
                   <div className="w-full max-w-lg flex flex-col items-center justify-center gap-8 py-12 px-6  md:bg-white md:shadow-lg rounded-lg">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white md:text-gray-800">Create Test</h2>

                        {/* Form */}
                        <form className="w-full flex flex-col gap-6">
                            
                            {/* Test Name */}
                            <div className="flex flex-col">
                            <label className="text-lg font-medium text-white md:text-gray-700">Test Name</label>
                            <input
                                type="text"
                                placeholder="E.g. 10 - MaPink"
                                className="mt-2 px-4 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                            />
                            </div>

                            {/* Duration Fields */}
                            <div className="flex flex-col gap-3">
                            <label className="text-lg font-medium text-white md:text-gray-700">Duration</label>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col">
                                <label className="text-sm text-white md:text-gray-600">Hours</label>
                                <input
                                    type="text"
                                    className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                />
                                </div>
                                <div className="flex flex-col">
                                <label className="text-sm text-white md:text-gray-600">Minutes</label>
                                <input
                                    type="text"
                                    className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                />
                                </div>
                                <div className="flex flex-col">
                                <label className="text-sm text-white md:text-gray-600">Seconds</label>
                                <input
                                    type="text"
                                    className="mt-1 px-3 py-2 border bg-white border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-[#8E74D0]"
                                />
                                </div>
                            </div>
                            </div>

                            {/* Test Code */}
                            <div className="flex flex-col">
                            <label className="text-lg font-medium text-white md:text-gray-700">Test Code</label>
                            <p className="mt-1 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-center font-semibold text-lg text-gray-800">
                                3Z93HY
                            </p>
                            </div>

                            {/* Start Button */}
                            <button className="w-full bg-[#8E74D0] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#7A5EB0] transition">
                            Start Test
                            </button>
                        </form>
                    </div>

                </div>

            </div>

      
        
        </div>
     );
}

export default CreateTest;