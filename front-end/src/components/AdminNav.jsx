import React, { useState } from 'react'
import {Link, Navigate} from "react-router-dom"
import { Bars3Icon, QuestionMarkCircleIcon, ChevronDownIcon, UserCircleIcon} from '@heroicons/react/24/solid';
//import react route & routes
//change all <Link> tags to <Link> 

function AdminNav() {
  const [menuOption, setMenuOption] = useState(false);

  const [mobileMenuDropDown, setDropDown] = useState(false)

  const [desktopMenuDropDown, setDDropDown ] = useState(false)
  
  let timeoutId;

  const logOut = () => {
    localStorage.removeItem("token")
    window.location.href = "/admin/sign-in"

  }


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
    <div className='w-full bg-white shadow-md'>
      <nav className=" w-full flex items-center justify-center sticky max-h-18 md:container md:mx-auto">
      
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
            <Link to = "/admin/home" className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4 flex item-center justify-center relative" onClick={ openDropDownMenu }> Home <span> <ChevronDownIcon className='size-4 absolute mt-2 ml-2  '/></span></Link>
            
            {mobileMenuDropDown && 
            <div className='flex flex-col justify-center'>
                <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4" > About Pi Day</Link>
                <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Day Competition</Link>
                <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Fun Facts</Link>
                <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Our Team</Link>
            </div>

              }

            <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Pratice</Link>
            <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4" to = "/admin/setting"> Setting</Link>
            <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Leaderboard</Link>
            <Link onClick={() => logOut()} className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4">My Account</Link>
            

              
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
                <Link to = "/admin/home" className="text-black px-4 hover:text-[#886fc7] py-1 font-medium text-sm lg:text-lg ">
                    Home
                </Link>

                {/* Dropdown Menu */}
                {desktopMenuDropDown && (
                    <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-36 lg:w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50 flex flex-col"
                    onMouseEnter={openDesktopDropDownMenu} // Keeps dropdown open
                    onMouseLeave={closeDesktopDropDownMenu} // Delayed close
                    >
                    <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                        About Pi Day
                    </Link>
                    <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                        Pi Day Competition
                    </Link>
                    <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                        Pi Fun Facts
                    </Link>
                    <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                        Our Team
                    </Link>
                    </div>
                )}
            </div>
            <Link className=" text-black  hover:text-[#886fc7] py-1 font-medium  px-4 lg:px6 text-sm lg:text-lg  ">Practice</Link>
            <Link className=" text-black whitespace-nowrap py-1 hover:text-[#886fc7] px-4 lg:px6  font-medium   text-sm lg:text-lg  " to = "/admin/setting">Setting</Link>
            <Link className=" text-black  hover:text-[#886fc7] py-1 font-medium px-4 lg:px6  text-sm lg:text-lg  " to = "/admin/leaderboard">Leaderboard</Link>
        </div>

        {/* Right Section */}
        {/* Acc Menu */}
        <div className="w-1/3 flex items-center gap-8 justify-end mr-2 ">
            <Link onClick={() => logOut()} className="text-black px-4 py-1">
                    <UserCircleIcon  className='size-10 lg:size-12'/>
            </Link>    
        </div>

          </div>

      </div>

      </nav>
    </div>


  );
}

export default AdminNav;