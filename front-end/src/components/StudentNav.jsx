import React, { useState } from 'react'
import { Bars3Icon, QuestionMarkCircleIcon, ChevronDownIcon, UserCircleIcon} from '@heroicons/react/24/solid';
//import react route & routes
//change all <a> tags to <Link> 

function StudentNav() {
  const [menuOption, setMenuOption] = useState(false);

  const [mobileMenuDropDown, setDropDown] = useState(false)

  const [desktopMenuDropDown, setDDropDown ] = useState(false)

  let timeoutId; // Stores the timeout reference


  const onClickToOpenMenuOption = () => {
    setMenuOption(!menuOption);
  }

  const openDropDownMenu = () =>{
    setDropDown(!mobileMenuDropDown)
  }


  // Opens the dropdown immediately
  const openDesktopDropDownMenu = () => {
    clearTimeout(timeoutId); // Clear any previous closing delay
    setDDropDown(true);
  };

  // Delays closing the dropdown
  const closeDesktopDropDownMenu = () => {
    timeoutId = setTimeout(() => {
        setDDropDown(false);
    }, 100); // 300ms delay before closing
  };



  return (
    <nav className=" w-full flex items-center justify-center sticky max-h-16 md:container md:mx-auto">
    
        {/* Mobile Menu */}
      <div className='w-full flex items-center justify-between md:hidden'>
        <div className="logo ml-4 py-4">
            <QuestionMarkCircleIcon className='size-10'/>
        </div>

        {/* Mobile Menu Button */}
        <div className='flex items-center justify-end mr-4 py-4'>
            <Bars3Icon className='size-10' onClick={onClickToOpenMenuOption}/>
        </div>
      {/* Mobile Menu Options */}
        {menuOption &&
            <div id="mobile-options" className="w-full h-auto bg-[#8E74D0] absolute top-full mt-2 flex flex-col text-sm font-semibold">
            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4 flex item-center justify-center relative" onClick={ openDropDownMenu }> Home <span> <ChevronDownIcon className='size-4 absolute mt-2 ml-2  '/></span></a>
            
            {mobileMenuDropDown && 
            <div className='flex flex-col justify-center'>
                <a className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> About Pi Day</a>
                <a className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Day Competition</a>
                <a className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Fun Facts</a>
                <a className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Our Team</a>
            </div>

            }

            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Pratice</a>
            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Test</a>
            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Leaderboard</a>
            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Contact</a>
            <a className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> My Account</a>
            

            
            </div>
        }
      </div>


    <div className='flex  w-full items-center justify-between  '>

        <div className="hidden md:block logo ml-2 py-4">
            <QuestionMarkCircleIcon className='size-10'/>
        </div>
    

        {/* Desktop Menu */}
        <div className="w-5/6 hidden md:flex justify-around items-center">
        {/* Left Section */}
        <div className="w-2/3 flex items-center gap-4 justify-center">
            <div 
            className="relative "
            onMouseEnter={openDesktopDropDownMenu} 
            onMouseLeave={closeDesktopDropDownMenu} 
            >
                {/* Home Link */}
                <a className="text-black px-6 hover:text-[#886fc7] py-1 font-medium text-sm lg:text-lg ">
                    Home
                </a>

                {/* Dropdown Menu */}
                {desktopMenuDropDown && (
                    <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 lg:w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50 flex flex-col"
                    onMouseEnter={openDesktopDropDownMenu} // Keeps dropdown open
                    onMouseLeave={closeDesktopDropDownMenu} // Delayed close
                    >
                    <a className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg  text-center py-3 transition">
                        About Pi Day
                    </a>
                    <a className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg  text-center py-3 transition">
                        Pi Day Competition
                    </a>
                    <a className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg  text-center py-3 transition">
                        Pi Fun Facts
                    </a>
                    <a className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg  text-center py-3 transition">
                        Our Team
                    </a>
                    </div>
                )}
            </div>
            <a className=" text-black  hover:text-[#886fc7] py-1 font-medium  px-6 text-sm lg:text-lg  ">Practice</a>
            <a className=" text-black  hover:text-[#886fc7] py-1 font-medium  px-6 text-sm lg:text-lg  ">Test</a>
            <a className=" text-black  hover:text-[#886fc7] py-1 font-medium px-6 text-sm lg:text-lg  ">Leaderboard</a>
            <a className=" text-black  hover:text-[#886fc7] py-1 font-medium px-6 text-sm lg:text-lg  ">Contact</a>
        </div>

        {/* Right Section */}
        {/* Acc Menu */}
        <div className="w-1/3 flex items-center gap-8 justify-end mr-2 ">
            <a className="text-black px-4 py-1">
                    <UserCircleIcon className='size-10 lg:size-12'/>
            </a>    
        </div>
        </div>



    </div>

    </nav>

  );
}

export default StudentNav;