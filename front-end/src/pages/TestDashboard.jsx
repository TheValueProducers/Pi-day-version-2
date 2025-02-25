import React from 'react'
import TeacherNav from '../components/TeacherNav'
import {ArrowLongLeftIcon} from '@heroicons/react/24/solid'

function TestDashboard() {
    return ( 
        <div className='bg-[#574979] w-full '>
            <TeacherNav />

            <div className='h-screen flex flex-col items-center justify-center'>
                <div className='flex container item-center justify-center'>         
                   <div className="w-full max-w-4/5 lg:max-w-2/3 flex flex-col items-center justify-center gap-8 md:py-8 px-6 md:bg-white md:shadow-lg rounded-lg">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white md:text-gray-800 whitespace-nowrap">Test History</h2>

                        <div className='w-full max-w-[800px] h-[300px] md:h-[450px] overflow-y-auto flex flex-col items-center justify-start gap-4'>
                            
                             <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>

                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>
                               <div className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                <p className='px-6 font-medium text-xl text-gray-800'>10 - Ma Pink</p>
                            </div>


                        </div>



                    </div>

                </div>

            </div>

      
        
        </div>
     );
}

export default TestDashboard;