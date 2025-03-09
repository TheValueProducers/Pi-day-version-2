import { ReactComponent as LogoIcon } from "../assets/logo.svg";
import piInfinite from "../assets/pi-infinite.jpg";
import piEinstein from "../assets/pi-einstein.jpg";
import piRecord from "../assets/pi-record.jpg";
import piPie from "../assets/pi-pie.jpg";
import piNasa from "../assets/pi-nasa.jpg";
import piHistory from "../assets/pi-history.jpg";
import piMusic from "../assets/pi-music.jpg";
import piNature from "../assets/pi-nature.jpg";
import piSimpsons from "../assets/pi-simpsons.jpg";
import piMovie from "../assets/pi-movie.jpg";
import piPyramids from "../assets/pi-pyramids.jpg";
import piRandom from "../assets/pi-random.jpg";
import piGoogle from "../assets/pi-google.jpg";
import piHoliday from "../assets/pi-holiday.jpg";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import binh from '../assets/binh.jpg'
import phat from '../assets/phat.jpg'
import doanh from '../assets/doanh.jpg'
import danh from '../assets/danh.jpg'
import duong from '../assets/duong.jpg'

import { motion, time, useScroll, useTransform  } from "framer-motion";
import React, {useRef} from "react";

import GeneralNav from '../components/GeneralNav'
import AdminNav from '../components/AdminNav'
import StudentNav from '../components/StudentNav'
import TeacherNav from "../components/TeacherNav";
import Footer from "../components/Footer";
// https://examples.motion.dev/react/scroll-container
// https://examples.motion.dev/react/enter-animation
// https://examples.motion.dev/react/gestures

function Home() {
    const ref = useRef(null);
    const location = useLocation();
    const userLevel = location.pathname.split("/")[1]
    

    useEffect(() => {
        if (location.hash) {
          const element = document.getElementById(location.hash.substring(1)); // Remove #
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      }, [location]);
    const targetDate = new Date("2025-03-14T00:00:00").getTime(); // Pi Day

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return {totalDays: "00" , totalHours: "00", totalMinutes: "00", totalSeconds: "00" }; // Timer reached
    }

    return {
        totalDays: String(Math.floor(difference/(1000 * 60 * 60 * 24))).padStart(2, "0"),
      totalHours: String(Math.floor(difference / (1000 * 60 * 60))%24).padStart(2, "0"), // Total hours
      totalMinutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"), // Total minutes
      totalSeconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"), // Total seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft()); // ✅ This updates the state every second
    }, 1000);

    return () => clearInterval(timer); // ✅ Cleanup interval on unmount
  }, []); 
    
    return ( 
    
  <div>
     {userLevel === "home" && <GeneralNav/>}
     {userLevel === "student" && <StudentNav/>}
     {userLevel === "teacher" && <TeacherNav/>}
     {userLevel === "admin" && <AdminNav/>}


            <div className="w-full min-h-screen py-24 flex flex-col justify-center items-center container mx-auto gap-12 bg-white ">
                <header className="w-full flex overflow-x-hidden flex-col justify-center items-center gap-6 px-4">
                        <motion.div
                            className="flex items-center justify-center mx-auto m-10 border-8  border-[#8E74D0] rounded-full"
                            
                            // 🔹 Fade In Effect
                            initial={{ opacity: 0, scale: 0.5 }} 
                            animate={{ opacity: 1, scale: 1 }} 
                            transition={{ duration: 1.5, ease: "easeOut" }} // Slow fade-in

                            style={{
                                width: "150px", // Adjusted for proper centering
                                height: "150px", 
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                            >
                            {/* Spinning Logo */}
                            <motion.div
                                className="flex items-center justify-center px-6 y-6"
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 5, ease: "linear" }} // 🔄 Super slow infinite rotation
                                style={{
                                width: "150px",
                                height: "150px",
                                
                                }}
                            >
                                <LogoIcon className="w-full h-full" />
                                                    
                            </motion.div>
                            </motion.div>
                        {/* Countdown Timer */}
                        <div className="flex items-center justify-center gap-3 md:gap-6">
                            {/* Days */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalDays.split("")[0]}</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalDays.split("")[1]}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-[#8E74D0]">Days</p>
                            </div>

                            {/* Colon */}
                            <p className="text-6xl md:text-8xl text-[#8E74D0] flex items-center">:</p>
                            {/* Hours */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalHours.split("")[0]}</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalHours.split("")[1]}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-[#8E74D0]">Hours</p>
                            </div>

                            {/* Colon */}
                            <p className="text-6xl md:text-8xl text-[#8E74D0] flex items-center">:</p>

                            {/* Minutes */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalMinutes.split("")[0]}</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{timeLeft.totalMinutes.split("")[1]}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-[#8E74D0]">Minutes</p>
                            </div>

                            {/* Colon */}
                            <p className="text-6xl md:text-8xl text-[#8E74D0] flex items-center">:</p>

                            {/* Seconds */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{String(timeLeft.totalSeconds).split("")[0]}</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>{String(timeLeft.totalSeconds).split("")[1]}</p>
                                    </div>
                                </div>
                                <p className="text-sm sm:text-md md:text-lg lg:text-xl text-[#8E74D0]">Seconds</p>
                            </div>
                        </div>

                        {/* Timer Text */}
                        <div className="w-full text-center flex flex-col items-center gap-4 mt-10">
                            <p className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] 
                                    text-transparent bg-clip-text">
                                Count Down Until March 14th
                            </p>
                            <p className="text-2xl md:text-4xl font-medium  bg-gradient-to-r from-[#1789FC] to-[#FC60A8] 
                                    text-transparent bg-clip-text">
                                Celebrate Pi Day by Reciting Pi Numbers!
                            </p>
                        </div>

                        {/* Try Now Button */}
                        <div className="flex justify-center w-full mt-10  py-2">
                        <motion.button className="bg-[#8E74D0] hover:bg-[#7A61B3] text-white text-medium text-center text-xl md:text-2xl px-12 py-4 rounded-md mt-4 "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                                Try Now
                            </motion.button>
                        </div>
                </header>  
            </div>

            {/* About Pi Day Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6" id="about-pi-day">
                <div className="w-full mb-12 sm:mb-16 md:mb-24">
                        <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                            About Pi Day
                        </p>
                </div>

            {/* Responsive Cards */}
            <div className="w-full flex flex-col items-center md:flex-row md:items-stretch justify-center gap-12 sm:gap-16 md:gap-24">
                
                {/* Card 1 */}
                <div className="w-full sm:w-[400px] md:w-[500px] md:min-h-[400px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-start gap-8 text-[#383A41] flex-grow h-auto">
                    <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">What Makes Pi Special?</p>
                    <p className="font-light text-lg sm:text-xl text-center">
                        Pi (π) is an infinite, irrational number that begins with 3.14159 and plays a vital role in geometry, physics, and engineering.
                    </p>
                    <p className="font-light text-lg sm:text-xl text-center">
                        It helps us calculate properties of circles and appears in formulas across many scientific fields, making it one of the most fascinating constants in mathematics.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="w-full sm:w-[400px] md:w-[500px] md:min-h-[400px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-start gap-8 text-[#383A41] flex-grow h-auto">
                    <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">The Story Behind Pi Day</p>
                    <p className="font-light text-lg sm:text-xl text-center">
                        Pi Day, celebrated every year on March 14th (3/14), honors the mathematical constant π (pi), representing the ratio of a circle’s circumference to its diameter.
                    </p>
                    <p className="font-light text-lg sm:text-xl text-center">
                        It’s a day to appreciate mathematics, science, and creativity, with activities like reciting Pi’s digits, eating pie, and hosting fun competitions.
                    </p>
                </div>
            </div>
                

            </div>

            {/* Pi Day Competition Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6" id="pi-day-comp">
                
                {/* Title */}
                <div className="w-full mb-12 sm:mb-16 md:mb-24">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                        Pi Day Competition
                    </p>
                </div>

                {/* Responsive Cards */}
                <div className="w-full flex flex-col items-center md:flex-row md:items-stretch justify-center gap-12 sm:gap-16 md:gap-24">
                    
                    {/* Card 1 */}
                    <div className="w-full sm:w-[400px] md:w-[500px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-start gap-8 text-[#383A41] flex-grow h-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">What is the Pi Day Competition about?</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            The Pi Day Competition is your chance to showcase your memory skills and celebrate the magic of mathematics!
                        </p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Participants will compete to recite as many digits of Pi as possible, starting with a preliminary online round hosted right here on this web app.
                        </p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Finalists will then advance to the grand live showdown at BVIS, where the best of the best will battle for the title of Pi Champion.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[400px] md:w-[500px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-start gap-8 text-[#383A41] flex-grow h-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">How to join the Pi Day Competition?</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Ready to test your memory and become the Pi Day Champion? Follow these steps:
                        </p>
                        <ul className="list-decimal list-inside text-lg sm:text-xl text-center">
                            <li>1. Be a BVIS Student – Only BVIS students can participate.</li>
                            <li>2. Sign Up by March 1st – Register on this web app before the deadline.</li>
                            <li>3. Inform Your Maths Teacher – Let them know you want to join.</li>
                            <li>4. Preparation – Use videos, guides, or apps to practice.</li>
                        </ul>
                        <p className="font-light text-lg sm:text-xl text-center">Best of Luck! 🥧✨</p>
                    </div>
                </div>
            </div>

            {/* Did You Know Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6" id ="fun-facts">
                {/* Section Title */}
                <div className="w-full mb-12 sm:mb-16 md:mb-24 flex flex-col items-center justify-center gap-4">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                        Did You Know?
                    </p>
                    <p className="text-center text-lg sm:text-xl md:text-2xl font-normal text-balance">
                        Explore fascinating trivia about Pi! From its infinite digits to its importance in math and science, discover why Pi has captivated minds for centuries.
                    </p>
                </div>

 {/* Horizontal Scroll Container */}
      <div ref={ref} className="w-full overflow-x-auto flex space-x-8 px-6 snap-x snap-mandatory scroll-smooth scrollbar-hide">
        {[
 {
    title: "Pi is Irrational",
    text: "Pi is an irrational number, meaning its decimal form never ends and never repeats!",
    image: piInfinite,
    bgColor: "bg-gradient-to-r from-[#8E74D0] to-[#381F4E]",
  },
  {
    title: "Pi's Birthday Twin",
    text: "March 14th isn’t just Pi Day—it’s also Albert Einstein’s birthday! 🎂",
    image: piEinstein,
    bgColor: "bg-gradient-to-r from-[#FC60A8] to-[#FFB6C1]",
  },
  {
    title: "The World Record for Reciting Pi",
    text: "Rajveer Meena holds the world record for reciting 70,000 digits of Pi while blindfolded! 😲",
    image: piRecord,
    bgColor: "bg-gradient-to-r from-[#1789FC] to-[#4AC0FF]",
  },
  {
    title: "Pi and Pies!",
    text: "Many people celebrate Pi Day by eating pie, since 'Pi' and 'Pie' are pronounced the same! 🥧",
    image: piPie,
    bgColor: "bg-gradient-to-r from-[#FFC107] to-[#FF5722]",
  },
  {
    title: "NASA Loves Pi",
    text: "NASA uses Pi to calculate spacecraft trajectories when exploring planets like Mars! 🚀",
    image: piNasa,
    bgColor: "bg-gradient-to-r from-[#4CAF50] to-[#2E7D32]",
  },
  {
    title: "Pi is Older Than You Think",
    text: "The Babylonians and Egyptians estimated Pi over 4,000 years ago, way before calculators! 🏺",
    image: piHistory,
    bgColor: "bg-gradient-to-r from-[#FF9800] to-[#E65100]",
  },
  {
    title: "Pi in Music?",
    text: "Some musicians have converted Pi into melodies by assigning each digit to a musical note! 🎵",
    image: piMusic,
    bgColor: "bg-gradient-to-r from-[#9C27B0] to-[#6A1B9A]",
  },
  {
    title: "Pi is Hidden in Nature",
    text: "Pi appears in circles, ripples, DNA strands, and even the rings of Saturn! 🌿🔬",
    image: piNature,
    bgColor: "bg-gradient-to-r from-[#0288D1] to-[#01579B]",
  },
  {
    title: "Pi in The Simpsons",
    text: "In an episode of The Simpsons, Professor Frink jokes that Pi is exactly 3.2! 😂",
    image: piSimpsons,
    bgColor: "bg-gradient-to-r from-[#D84315] to-[#BF360C]",
  },
  {
    title: "Pi Has Its Own Movie",
    text: "The 1998 movie 'Pi' is a psychological thriller about a mathematician obsessed with Pi! 🎥",
    image: piMovie,
    bgColor: "bg-gradient-to-r from-[#673AB7] to-[#311B92]",
  },
  {
    title: "Pi is in the Great Pyramid",
    text: "The ratio of the height to the base of the Great Pyramid of Giza is amazingly close to Pi! 🏛️",
    image: piPyramids,
    bgColor: "bg-gradient-to-r from-[#FF3D00] to-[#DD2C00]",
  },
  {
    title: "Pi's Randomness",
    text: "Scientists believe Pi is completely random, meaning every number sequence exists in it—yes, even your birthday! 🎂",
    image: piRandom,
    bgColor: "bg-gradient-to-r from-[#00C853] to-[#009624]",
  },
  {
    title: "Pi and Google",
    text: "Google used its cloud computing to calculate Pi to 31.4 trillion digits in 2019! ☁️",
    image: piGoogle,
    bgColor: "bg-gradient-to-r from-[#1A237E] to-[#3F51B5]",
  },
  {
    title: "Pi Has Its Own Holiday",
    text: "In 2009, the U.S. House of Representatives officially declared March 14 as National Pi Day! 🇺🇸",
    image: piHoliday,
    bgColor: "bg-gradient-to-r from-[#FFD600] to-[#FFC400]",
  },
        ].map((fact, index) => (
          <motion.div
            key={index}
            className={`min-w-full sm:min-w-[500px] max-w-[700px] h-[600px] px-6 sm:px-10 py-10 flex flex-col ${fact.bgColor} rounded-lg items-center justify-center gap-6 text-white shadow-lg mx-auto snap-center`}
            initial={{ opacity: 0.5, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <img src={fact.image} alt={fact.title} className="w-32 h-32 md:w-48 md:h-48 object-contain" />
            <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">{fact.title}</p>
            <p className="font-light text-lg sm:text-xl text-center">{fact.text}</p>
          </motion.div>
        ))}
      </div>
                

            </div>

            {/* Meet the Team Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6 " id="our-team">
            <div className="w-full mb-12 sm:mb-16 md:mb-24 flex flex-col items-center justify-center gap-4">
                <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                    BVIS Tech Committee
                </p>
                <p className="text-center text-lg sm:text-xl md:text-2xl font-normal text-balance">
                    The team behind Pi Day
                </p>
            </div>

            {/* Profile Grid */}
            <div className="flex flex-col items-center justify-center gap-12">
                {/* First Row (2 People) */}
                <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
                    {/* Profile 1 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src={binh} alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
                            </div>
                        <div>
                                <p className="text-lg  md:text-xl font-semibold text-center text-[#383A41]">Vuong Binh</p>
                                <p className="text-sm md:text-lg font-light text-center text-[#383A41]">Front-End Dev</p>
    
                        </div>
                       
                    </div>

                    {/* Profile 2 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src={phat} alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                                <p className="text-lg  md:text-xl font-semibold text-center text-[#383A41]">The Phat</p>
                                <p className="text-sm md:text-lg font-light text-center text-[#383A41]">Back-End Dev</p>
                        </div>
                    </div>
                </div>

                {/* Second Row (3 People) */}
                <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
                    {/* Profile 3 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src={duong} alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                                <p className="text-lg  md:text-xl font-semibold text-center text-[#383A41]">Duong</p>
                                <p className="text-sm md:text-lg font-light text-center text-[#383A41]">UI/UX Designer</p>
                        </div>
                    </div>

                    {/* Profile 4 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src={doanh} alt="Team Member 4" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                                <p className="text-lg  md:text-xl font-semibold text-center text-[#383A41]">Dang Doanh</p>
                                <p className="text-sm md:text-lg font-light text-center text-[#383A41]">UI/UX Designer</p>
                        </div>
                    </div>

                    {/* Profile 5 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src={danh} alt="Team Member 5" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                                <p className="text-lg  md:text-xl font-semibold text-center text-[#383A41]">Thanh Danh</p>
                                <p className="text-sm md:text-lg font-light text-center text-[#383A41]">Junior Intern</p>
                        </div>
                    </div>
                </div>
            </div>
</div>

    <Footer/>
    </div>
);
}

export default Home;