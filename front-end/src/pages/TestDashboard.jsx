import React, {useState, useEffect} from 'react'
import TeacherNav from '../components/TeacherNav'
import AdminNav from '../components/AdminNav';
import StudentNav from '../components/StudentNav';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function TestDashboard() {
  const location = useLocation();
  const [games, setGames] = useState([]);
  const userLevel = location.pathname.split("/")[1];
  
  useEffect(() => {
    const fetchGames = async () => {
      try {

        const token = localStorage.getItem("token");
        

       

        // ✅ Use dynamic API endpoint
        const response = await axios.get(`http://localhost:4000/api/v2/${userLevel}/show-games`, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token in headers
        }
        });

        if (response.data?.games?.length > 0) {
          setGames(response.data.games);
        } else {
          console.log("No games found.");
        }
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []); 

    
    const mockGames = [
        {
          "game_id": "G10001",
          "name": "10-MaPink",
          "duration": 45,
          "status": "in_game",
          "code": "123456",
          "teacher_id": "550e8400-e29b-41d4-a716-446655440000"
        },
        {
          "game_id": "G10002",
          "name": "12-MaBlue",
          "duration": 50,
          "status": "finished",
          "code": "987654",
          "teacher_id": "6f790f4d-3e45-48a5-b5c3-54dfb807a629"
        },
        {
          "game_id": "G10003",
          "name": "9-MaGreen",
          "duration": 40,
          "status": "in_game",
          "code": "654321",
          "teacher_id": "9a1b2c3d-4e5f-6789-abcdef123456"
        },
        {
          "game_id": "G10004",
          "name": "6-MaYellow",
          "duration": 35,
          "status": "finished",
          "code": "789123",
          "teacher_id": "d91c58a2-5a63-4f8b-90be-c12e5e12f4df"
        },
        {
          "game_id": "G10005",
          "name": "7-MaPurple",
          "duration": 30,
          "status": "in_game",
          "code": "456789",
          "teacher_id": "d83c19f4-8902-4c56-91a3-e6a2b5f8e0c3"
        }
      ]
    
    return ( 
        <div className='bg-[#574979] w-full '>
            {userLevel === "student" && <StudentNav /> }
            {userLevel === "teacher" && <TeacherNav /> }
            {userLevel === "admin" && <AdminNav /> }
            
            <div className='min-h-screen flex flex-col items-center justify-center py-24'>
                <div className='flex container mx-auto item-center justify-center'>         
                   <div className="w-full max-w-4/5 lg:max-w-2/3 flex flex-col items-center justify-center gap-8 md:py-8 px-6 md:bg-white md:shadow-lg rounded-lg">
                        {/* Title */}
                        <h2 className="font-semibold text-center text-3xl text-white md:text-gray-800 whitespace-nowrap">Test History</h2>
                        <div className='w-full max-w-[800px] h-[300px] md:h-[450px] overflow-y-auto flex flex-col items-center justify-start gap-4'>
                            {games.length > 0 && games.map(game => {
                                return (
                                    <Link to = {`/${userLevel}/leaderboard/${game.game_id}`} className='w-full flex items-center justify-start py-4 rounded-sm bg-gray-200 hover:bg-gray-300'>
                                        <p className='px-6 font-medium text-xl text-gray-800'>{game.name}</p>
                                    </Link>

                                )
                            })}
                             



                        </div>



                    </div>

                </div>

            </div>
            <Footer/>
        </div>
     );
}

export default TestDashboard;