import React, {useState} from 'react'
import TeacherNav from '../components/TeacherNav'
import Footer from '../components/Footer';


function TestTable() {
    const [users, setUsers] = useState([
        { rank: 1, name: "Nghiem The Phat", piNumCorrect: "12" },
        { rank: 2, name: "Phat", piNumCorrect: "8" },
        { rank: 3, name: "Phat", piNumCorrect: "7" },
        { rank: 4, name: "Phat", piNumCorrect: "2" },
          { rank: 1, name: "Nghiem The Phat", piNumCorrect: "12" },
        { rank: 2, name: "Phat", piNumCorrect: "8" },
        { rank: 3, name: "Phat", piNumCorrect: "7" },
        { rank: 4, name: "Phat", piNumCorrect: "2" },
          { rank: 1, name: "Nghiem The Phat", piNumCorrect: "12" },
        { rank: 2, name: "Phat", piNumCorrect: "8" },
        { rank: 3, name: "Phat", piNumCorrect: "7" },
        { rank: 4, name: "Phat", piNumCorrect: "2" },
          { rank: 1, name: "Nghiem The Phat", piNumCorrect: "12" },
        { rank: 2, name: "Phat", piNumCorrect: "8" },
        { rank: 3, name: "Phat", piNumCorrect: "7" },
        { rank: 4, name: "Phat", piNumCorrect: "2" },
        
        


     
       ]);
    
    return ( 
        <div className='bg-[#574979] w-full '>
            <TeacherNav />

            <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className='flex md:container item-center justify-center'>         
                   <div className="w-full flex flex-col items-center justify-center gap-8 md:py-8 px-6">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white  whitespace-nowrap">10 - Ma Pink</h2>

                              <div className="w-full overflow-auto h-[360px] px-8 ">
                                <table className="w-full  ">
                                    <thead className="bg-[#8E74D0] text-white ">
                                        <th className="py-4 font-large text-center text-nowrap text-xs  sm:text-lg md:text-xl">Rank</th>
                                        <th className="py-4 font-large text-center text-nowrap text-xs  sm:text-lg md:text-xl">Name</th>
                                        <th className="py-4 font-large text-center  text-xs  sm:text-lg md:text-xl">Pi Num Guessed Correct</th>
                                    </thead>
                                    <tbody className=" overflow-y-auto">
                                        {users.map(user => {
                                            return (<tr className="odd:bg-white bg-gray-300">
                                                <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.rank}</td>
                                                <td className="py-4 text-xs  sm:text-sm md:text-xl text-center">{user.name}</td>
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