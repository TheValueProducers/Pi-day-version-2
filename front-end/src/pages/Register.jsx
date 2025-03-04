import React, { useState } from "react";
import { Link } from "react-router-dom";
import galaxyBG from "../assets/galaxybg.jpg";
import Footer from "../components/Footer";
import GeneralNav from "../components/GeneralNav";
import {
  EyeIcon,
  EyeSlashIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full bg-white">
      <GeneralNav />

      <main className="container relative mx-auto flex flex-col min-h-screen items-center justify-center px-4 md:py-32 py-28">
        {/* Register Form Section */}
        <div className="flex flex-col md:flex-row items-center justify-center lg:px-6 gap-10 lg:py-6 rounded-md border-0 lg:border-[1px] md:border-gray-200 w-full max-w-5xl">
          
          {/* Left Side: Form */}
          <div className="flex flex-col items-center justify-center gap-8 w-full md:w-1/2 min-h-[400px]">
            <header className="text-center">
              <p className="text-2xl font-semibold">Create an Account</p>
              <p className="text-xl font-light">
                Sign up to join the Pi Day challenge! <span>🥧✨</span>
              </p>
            </header>

            <section className="w-full">
              <form className="flex flex-col items-center gap-4">
                {/* Input Fields */}
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  type="text"
                  placeholder="Enter Your Username"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  type="email"
                  placeholder="Enter Your Email"
                />
                <input
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                  type="text"
                  placeholder="Enter Your Full Name"
                />

                {/* Year & Class Selection */}
                <div className="flex flex-col gap-6 p-6 bg-gray-100 rounded-lg w-full">
                  <p className="text-lg font-semibold">Select Your Year Group & Class:</p>

                  {/* Year Group Selection */}
                  <div className="flex flex-col gap-4">
                    <p className="text-md font-medium mb-2">Year Group:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {[7, 8, 9, 10, 11, 12, 13].map((year) => (
                        <label key={year} className="cursor-pointer">
                          <input
                            type="radio"
                            name="yearGroup"
                            value={`Y${year}`}
                            className="hidden peer"
                            defaultChecked={year === 7}
                          />
                          <span className="px-4 py-2 rounded-lg block text-center bg-gray-200 peer-checked:bg-[#8E74D0] peer-checked:text-white">
                            Y{year}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Class Selection */}
                  <div className="flex flex-col gap-4">
                    <p className="text-md font-medium mb-2">Class:</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {["B", "V", "I", "S"].map((cls) => (
                        <label key={cls} className="cursor-pointer">
                          <input
                            type="radio"
                            name="classGroup"
                            value={cls}
                            className="hidden peer"
                            defaultChecked={cls === "B"}
                          />
                          <span className="px-6 py-2 rounded-lg block text-center bg-gray-200 peer-checked:bg-[#8E74D0] peer-checked:text-white">
                            {cls}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Password Fields */}
                <div className="w-full flex flex-col gap-4">
                  {/* Password Field */}
                  <div className="relative w-full">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a Password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeIcon className="size-6" /> : <EyeSlashIcon className="size-6" />}
                    </button>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="relative w-full">
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-400"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeIcon className="size-6" /> : <EyeSlashIcon className="size-6" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-1/2 rounded-sm bg-[#8E74D0] py-2 text-white hover:bg-[#886fc7] text-lg font-medium">
                  Sign Up
                </button>

                <p>Already have an account? <Link className="text-blue-700 font-medium underline" to="/sign-in">Sign In</Link></p>
              </form>
            </section>
          </div>

          {/* Right Side: Image */}
          <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center">
            <img className="w-full h-full object-cover rounded-lg" src={galaxyBG} alt="Galaxy Background" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Register;