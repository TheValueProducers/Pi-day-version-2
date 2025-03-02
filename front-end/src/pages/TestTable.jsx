import React, {useState} from 'react'
import TeacherNav from '../components/TeacherNav'
import AdminNav from '../components/AdminNav';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';


function TestTable() {
    const location = useLocation();
    const userLevel = location.pathname.split("/")[1]
    const className = location.pathname.split("/")[3]

    const [users, setUsers] = useState([
        { rank: 1, name: "skibidiToilet", piNumCorrect: "12" },
        { rank: 2, name: "skibidi", piNumCorrect: "8" },
        { rank: 3, name: "hskibidi", piNumCorrect: "7" },
        { rank: 4, name: "skibidi", piNumCorrect: "2" },
        { rank: 5, name: "skibidi", piNumCorrect: "12" },
        { rank: 6, name: "skibidi", piNumCorrect: "8" },
        { rank: 7, name: "skibidi", piNumCorrect: "7" },
        
        
        


     
       ]);
    
    return ( 
        <div className='bg-[#574979] w-full '>
            {userLevel === "teacher"? <TeacherNav />: <AdminNav /> }

            <Link to = {`/${userLevel}/leaderboard`} className="absolute top-20 left-6 md:top-22 md:left-12 flex items-center gap-2">
                <ArrowLongLeftIcon className="size-8 text-pr font-semibold text-white" />
                <p className='text-xl font-semibold text-white'>Return</p>
            </Link>

            <div className='h-screen flex flex-col items-center justify-center'>
                <div className='flex md:container item-center justify-center'>         
                   <div className="w-full flex flex-col items-center justify-center gap-8 md:py-8 px-6">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white  whitespace-nowrap">10 - Ma Pink</h2>

                              <div className="w-full overflow-auto h-[360px] px-8 ">
                                <table className="w-full  ">
                                    <thead className="bg-[#8E74D0] text-white ">
                                        <th className="py-4 font-large text-center text-nowrap text-xs  sm:text-lg md:text-xl">Rank</th>
                                        <th className="py-4 font-large text-center text-nowrap text-xs  sm:text-lg md:text-xl">Username</th>
                                        <th className="py-4 font-large text-center  text-xs  sm:text-lg md:text-xl">Pi Num Guessed Correct</th>
                                    </thead>
                                    <tbody className=" overflow-y-auto">
                                        {users.map(user => {
                                            return (<tr className="odd:bg-white bg-gray-300">
                                                <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.rank}</td>
                                                <td className="py-4 text-xs  sm:text-sm md:text-xl text-center"><Link to = {`/${userLevel}/leaderboard/${className}/${user.name}`}>{user.name}</Link></td>
                                                <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.piNumCorrect}</td>
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