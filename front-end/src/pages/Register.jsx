import React from 'react';
import galaxyBG from "../assets/galaxybg.jpg"



function Register() {
    return ( 
    

<main className="container mx-auto flex h-screen items-center justify-center px-4">
  <div className="flex flex-col md:flex-row items-center justify-center lg:px-6 gap-10 lg:py-6  rounded-md border-0 lg:border-[1px] md:border-gray-200 w-full max-w-5xl">
    
    {/* Left Side: Form */}
    <div className="flex flex-col items-center justify-center gap-8 w-full md:w-1/2 min-h-[400px]">
      <header className="text-center">
        <p className="text-2xl font-semibold">Create an account</p>
        <p className="text-xl font-light">Sign in to join the Pi Day challenge! <span>🥧✨</span></p>
      </header>

      <section className="w-full">
        <form className="flex flex-col items-center gap-4">
          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="text" placeholder="Enter Your Username" />
          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="email" placeholder="Enter Your Email" />
          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="text" placeholder="Enter Your Full Name" />

          {/* Year & Class Selection */}
          <div className="flex flex-col gap-6 p-6 bg-gray-100 rounded-lg w-full">
            <p className="text-lg font-semibold">Select Your Year Group & Class:</p>

            {/* Year Group Selection */}
            <div className="flex flex-col gap-4">
              <p className="text-md font-medium mb-2">Year Group:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[7, 8, 9, 10, 11, 12, 13].map((year) => (
                  <label key={year} className="cursor-pointer">
                    <input type="radio" name="yearGroup" value={`Y${year}`} className="hidden peer" defaultChecked={year === 7} />
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
                    <input type="radio" name="classGroup" value={cls} className="hidden peer" defaultChecked={cls === "B"} />
                    <span className="px-6 py-2 rounded-lg block text-center bg-gray-200 peer-checked:bg-[#8E74D0] peer-checked:text-white">
                      {cls}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="password" placeholder="Create a Password" />
          <input className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring focus:ring-[#8E74D0]" type="password" placeholder="Confirm Password" />
          <button className="w-1/2 rounded-sm bg-[#8E74D0] py-2 text-white hover:bg-[#886fc7] text-lg font-medium" type="submit">
            Sign Up
          </button>
        </form>
      </section>
    </div>

    {/* Right Side: Image */}
    <div className="hidden lg:flex lg:w-1/2 h-full items-center justify-center">
      <img className="w-full h-full object-cover rounded-lg" src={galaxyBG} alt="Galaxy Background" />
    </div>
  </div>
</main>
     );
}

export default Register;