import { ReactComponent as LogoIcon } from "../assets/logo.svg";


import GeneralNav from '../components/GeneralNav'
import AdminNav from '../components/AdminNav'
import StudentNav from '../components/StudentNav'
import TeacherNav from "../components/TeacherNav";
import Footer from "../components/Footer";
// https://examples.motion.dev/react/scroll-container
// https://examples.motion.dev/react/enter-animation
// https://examples.motion.dev/react/gestures

function Home() {
    return ( 
  <div>
    <GeneralNav/>

            <div className="w-full min-h-screen py-24 flex flex-col justify-center items-center container mx-auto gap-12 bg-white ">
                <header className="w-full flex overflow-x-hidden flex-col justify-center items-center gap-6 px-4">
                        <div className="w-38 h-38 md:w-52 md:h-52 px-8 py-8 border-8 md:border-12  border-[#8E74D0] rounded-full flex items-center justify-center mx-auto m-10">
                            <LogoIcon className="size-24 sm:size-36"/>
                        </div>
                    
                        {/* Countdown Timer */}
                        <div className="flex items-center justify-center gap-3 md:gap-6">
                            {/* Hours */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>1</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>1</p>
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
                                        <p>1</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>1</p>
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
                                        <p>1</p>
                                    </div>
                                    <div className="flex items-center justify-center text-[#8E74D0] text-6xl md:text-8xl bg-[#381F4E] 
                                                    rounded-lg px-6 py-4 w-16 h-20 md:h-36 sm:w-20 md:w-24 lg:w-28">
                                        <p>1</p>
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
                        <div className="flex justify-center w-full mt-10">
                            <button className="bg-[#8E74D0] hover:bg-[#7A61B3] text-white text-medium text-center text-base sm:text-lg md:text-xl px-12 py-4 rounded-md mt-4">
                                Try Now
                            </button>
                        </div>
                </header>  
            </div>

            {/* About Pi Day Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6">
                <div className="w-full mb-12 sm:mb-16 md:mb-24">
                        <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                            About Pi Day
                        </p>
                </div>

                {/* Responsive Cards */}
                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24">
                    {/* Card 1 */}
                    <div className="w-full sm:w-[400px] md:w-[500px] min-h-[500px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-8 text-[#383A41]">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">What Makes Pi Special?</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Pi (π) is an infinite, irrational number that begins with 3.14159 and plays a vital role in geometry, physics, and engineering.
                        </p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            It helps us calculate properties of circles and appears in formulas across many scientific fields, making it one of the most fascinating constants in mathematics.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full sm:w-[400px] md:w-[500px] min-h-[500px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-8 text-[#383A41]">
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
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6">
                <div className="w-full mb-12 sm:mb-16 md:mb-24">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                        Pi Day Competition
                    </p>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-16 md:gap-24">
                    {/* Card 1 */}
                    <div className="w-full sm:w-[400px] md:w-[500px] min-h-[600px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-8 text-[#383A41]">
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
                    <div className="w-full sm:w-[400px] md:w-[500px] min-h-[600px] px-6 sm:px-12 py-10 sm:py-14 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-8 text-[#383A41]">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">How to join the Pi Day Competition?</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Ready to test your memory and become the Pi Day Champion? Follow these steps:
                        </p>
                        <p className="font-light text-lg sm:text-xl text-center">1. Be a BVIS Student – Only BVIS students can participate.</p>
                        <p className="font-light text-lg sm:text-xl text-center">2. Sign Up by March 1st – Register on this web app before the deadline.</p>
                        <p className="font-light text-lg sm:text-xl text-center">3. Inform Your Maths Teacher – Let them know you want to join.</p>
                        <p className="font-light text-lg sm:text-xl text-center">4. Preparation – Use videos, guides, or apps to practice.</p>
                        <p className="font-light text-lg sm:text-xl text-center">Best of Luck! 🥧✨</p>
                    </div>
                </div>
            </div>

            {/* Did You Know Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6">
                {/* Section Title */}
                <div className="w-full mb-12 sm:mb-16 md:mb-24 flex flex-col items-center justify-center gap-4">
                    <p className="text-3xl sm:text-5xl md:text-6xl text-center font-semibold bg-gradient-to-r from-[#1789FC] to-[#FC60A8] text-transparent bg-clip-text py-4">
                        Did You Know?
                    </p>
                    <p className="text-center text-lg sm:text-xl md:text-2xl font-normal text-balance">
                        Explore fascinating trivia about Pi! From its infinite digits to its importance in math and science, discover why Pi has captivated minds for centuries.
                    </p>
                </div>

                {/* Trivia Cards Grid */}
                <div className="w-full flex flex-col item-center justify-evenly sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-12 ">
                    {/* Card 1 */}
                    <div className="max-w-[400px] min-h-[300px] px-6 sm:px-10 py-10 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-6 text-[#383A41] mx-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">Pi Trivia</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            The Pi Day Competition is your chance to showcase your memory skills and celebrate the magic of mathematics!
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-[400px] min-h-[300px] px-6 sm:px-10 py-10 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-6 text-[#383A41] mx-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">Pi Facts</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            Pi (π) has been calculated to over **62.8 trillion digits**, but only **39 digits** are needed for most precise calculations!
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-[400px] min-h-[300px] px-6 sm:px-10 py-10 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-6 text-[#383A41] mx-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">Pi in History</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            The symbol **π** was first used by the Welsh mathematician **William Jones in 1706**, but it became popular thanks to **Euler**.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="max-w-[400px] min-h-[300px] px-6 sm:px-10 py-10 flex flex-col md:bg-[#F8F9FF] rounded-lg items-center justify-center gap-6 text-[#383A41] mx-auto">
                        <p className="font-medium text-2xl sm:text-3xl md:text-4xl text-center">Pi in History</p>
                        <p className="font-light text-lg sm:text-xl text-center">
                            The symbol **π** was first used by the Welsh mathematician **William Jones in 1706**, but it became popular thanks to **Euler**.
                        </p>
                    </div>
                </div>
            </div>

            {/* Meet the Team Section */}
            <div className="w-full min-h-screen flex flex-col justify-center items-center container mx-auto gap-12 bg-white py-16 sm:py-24 md:py-32 px-6 ">
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
                            <img src="/assets/profile1.jpg" alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#383A41]">Member 1</p>
                    </div>

                    {/* Profile 2 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src="/assets/profile2.jpg" alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#383A41]">Member 2</p>
                    </div>
                </div>

                {/* Second Row (3 People) */}
                <div className="flex flex-wrap justify-center gap-12 sm:gap-16">
                    {/* Profile 3 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src="/assets/profile3.jpg" alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#383A41]">Member 3</p>
                    </div>

                    {/* Profile 4 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src="/assets/profile4.jpg" alt="Team Member 4" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#383A41]">Member 4</p>
                    </div>

                    {/* Profile 5 */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gray-300 flex items-center justify-center">
                            <img src="/assets/profile5.jpg" alt="Team Member 5" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-[#383A41]">Member 5</p>
                    </div>
                </div>
            </div>
</div>

    <Footer/>
    </div>
);
}

export default Home;