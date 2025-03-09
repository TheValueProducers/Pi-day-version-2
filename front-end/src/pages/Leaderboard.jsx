import React, {useState, useEffect} from "react";
import StudentNav from "../components/StudentNav";
import Footer from "../components/Footer";
import axios from "axios";

const Leaderboard = () => {
  const [students, setStudents] = useState()
  const token = localStorage.getItem("token")

  useEffect(() => {
    const fetchTable = async () => {
      try {
        const response = await axios.post(`https://pi-day-version-2.onrender.com/api/v2/teacher/show-leaderboard`, {game_id: "all"}, {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Send token in headers
        }
        });
        if (response.data && response.data.attempts.length > 0) {
          setStudents(response.data.attempts); // Ensure you're setting the actual data
        }
      } catch (error) {
        alert("Error fetching games:", error);
      }
    };

    fetchTable();
  }, [])
  
  
  // 🔹 Sample test data for leaderboard rankings
  const users = [
    { name: "Alice Johnson", piNumCorrect: 150 },
    { name: "Bob Williams", piNumCorrect: 145 },
    { name: "Charlie Smith", piNumCorrect: 140 },
    { name: "David Lee", piNumCorrect: 130 },
    { name: "Emma Brown", piNumCorrect: 120 },
    { name: "Frank Green", piNumCorrect: 110 },
    { name: "Grace White", piNumCorrect: 105 },
    { name: "Henry Martin", piNumCorrect: 100 },
    { name: "Jack Wilson", piNumCorrect: 90 }
  ];

    return (
        <div className="bg-[#574979] w-full ">
            <StudentNav/>
            <div className="w-full bg-[#574979] min-h-screen flex flex-col items-center justify-center py-28 px-6">
    {/* Title */}
  <div className="mb-6 text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-white">🏆 Pi Day Leaderboard 🏆</h1>
    <p className="text-lg md:text-xl text-gray-300 mt-2">Top students with the most digits of π memorized!</p>
  </div>

  {/* Leaderboard Container */}
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
    
    {/* Scrollable Table Container */}
    <div className="overflow-x-auto max-h-[425px]">
      <table className="w-full table-fixed border-collapse">
        
        {/* Table Head (Fixed on Scroll) */}
        <thead className="bg-[#8E74D0] text-white text-lg md:text-xl sticky top-0 z-10">
          <tr>
            <th className="py-4 px-6 w-1/4 text-left font-semibold">Rank</th>
            <th className="py-4 px-6 w-2/4 text-left font-semibold">Student</th>
            <th className="py-4 px-6 w-1/4 text-left font-semibold">Digits Memorized</th>
          </tr>
        </thead>

        {/* Scrollable Table Body */}
        <tbody className="divide-y divide-gray-300">
          {students && students.map((user, index) => (
            <tr key={index} className="text-lg md:text-xl bg-white hover:bg-gray-100">
              <td className="py-4 px-6 w-1/5 font-semibold">{index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : index + 1}</td>
              <td className="py-4 px-6 w-2/5">{user.username}</td>
              <td className="py-4 px-6 w-1/5 font-semibold text-center text-[#8E74D0]">{user.correct_digits}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>

  </div>
              
              
              
  

            </div>
            <Footer/>
        </div>
  );
};

export default Leaderboard;