import React from 'react';
import { useNavigate } from 'react-router-dom';

import StudentNav from '../components/StudentNav';
import TeacherNav from '../components/TeacherNav';
import AdminNav from '../components/AdminNav';
import Footer from '../components/Footer';

const MyAccount = () => {
  const navigate = useNavigate();

  const user = {
    fullName: "John Doe",
    username: "john_doe",
    email: "john@example.com",
    userType: "Student", // Can be "Teacher" or "Admin"
  };

  // Logout Handler
  const handleLogout = () => {
    // Add Firebase logout or localStorage/session cleanup logic here
    console.log("User logged out");
    navigate("/sign-in"); // Redirect to login page
  };

  return (
    <div className="w-full bg-[#574979]  flex flex-col">
      {/* Navbar */}
      <StudentNav />

      {/* Content Wrapper */}
      <main className="flex flex-col min-h-screen items-center justify-center flex-grow py-24 px-6">
        
        {/* Account Info Box */}
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 flex flex-col gap-6 text-center">
          
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-[#8E74D0]">My Account</h1>

          {/* User Info */}
          <div className="space-y-4 text-lg md:text-xl">
            <div className="flex justify-between border-b pb-2">
              <p className="font-medium text-gray-600">Full Name:</p>
              <p className="font-semibold">{user.fullName}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-medium text-gray-600">Username:</p>
              <p className="font-semibold">{user.username}</p>
            </div>
            <div className="flex justify-between border-b pb-2">
              <p className="font-medium text-gray-600">Email:</p>
              <p className="font-semibold">{user.email}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium text-gray-600">User Type:</p>
              <p className={`font-semibold ${user.userType === "Student" ? "text-[#8E74D0]" : user.userType === "Teacher" ? "text-[#574979]" : "text-red-500"}`}>
                {user.userType}
              </p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full mt-6 bg-[#8E74D0] hover:bg-[#7A5EB0] text-white font-semibold py-3 rounded-lg transition"
          >
            Log Out
          </button>

        </div>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyAccount;