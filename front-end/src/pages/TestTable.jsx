import React, {useState, useEffect} from 'react'
import TeacherNav from '../components/TeacherNav'
import AdminNav from '../components/AdminNav';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useParams} from 'react-router-dom';


function TestTable() {
    const location = useLocation();
    const userLevel = location.pathname.split("/")[1]
    const className = location.pathname.split("/")[3]
    const token = localStorage.getItem("token")
    const {game_id} = useParams();
    


    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchTable = async () => {
          try {
            const response = await axios.post(`https://pi-day-version-2.onrender.com/api/v2/teacher/show-leaderboard`, {game_id: game_id}, {
              headers: {
                Authorization: `Bearer ${token}`, // ✅ Send token in headers
            }
            });
            if (response.data && response.data.attempts.length > 0) {
              setUsers(response.data.attempts); // Ensure you're setting the actual data
            }
          } catch (error) {
            alert("Error fetching games:", error);
          }
        };
    
        fetchTable(); // Call the function inside useEffect
      }, []);
    
    return ( 
        <div className='bg-[#574979] w-full '>
            {userLevel === "teacher"? <TeacherNav />: <AdminNav /> }


            <div className=' flex flex-col items-center justify-center'>
                <div className='flex container mx-auto min-h-screen item-center justify-center relative mt-18 pt-8'> 
                    
                <Link to = {`/${userLevel}/leaderboard`} className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-2">
                    <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-white" />
                    <p className='text-base md:text-xl font-semibold text-white'>Return</p>
                </Link>

                <div className="w-full flex flex-col items-center justify-center gap-8 px-6">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white  whitespace-nowrap">{className}</h2>

           
                <div className="w-full overflow-y-auto max-h-96 border-[0] rounded-lg">
                    <table className="w-full border-collapse">
                        {/* 🔹 Sticky Table Header */}
                        <thead className="bg-[#8E74D0] text-white sticky top-0 z-10">
                            <tr>
                                <th className="py-4 font-large text-center text-nowrap text-xs sm:text-lg md:text-xl">Rank</th>
                                <th className="py-4 font-large text-center text-nowrap text-xs sm:text-lg md:text-xl">Username</th>
                                <th className="py-4 font-large text-center text-xs sm:text-lg md:text-xl">Pi Num Guessed Correct</th>
                            </tr>
                        </thead>

                        {/* 🔹 Scrollable Table Body */}
                        <tbody>
                            {users.length > 0 && users.map(user => {
                                return (<tr className="odd:bg-white bg-gray-300">
                                    <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.rank}</td>
                                    <td className="py-4 text-xs  sm:text-sm md:text-xl text-center"><Link to = {`/${userLevel}/leaderboard/${className}/${user.attempt_id}`}>{user.username}</Link></td>
                                    <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.correct_digits}</td>
                                        </tr>)
                                })}  
                        </tbody>
                    </table>
                </div>
                        </div>

               



                    </div>

            </div>

            <Footer/>

        </div>

      

     );
}

export default TestTable;