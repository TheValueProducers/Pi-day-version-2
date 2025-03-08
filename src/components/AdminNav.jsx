import React, { useState } from 'react'
import {Link, Navigate} from "react-router-dom"
import { Bars3Icon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { ReactComponent as LogoIcon } from "../assets/logo.svg";
//import react route & routes
//change all <Link> tags to <Link> 


function AdminNav() {
  const [menuOption, setMenuOption] = useState(false);

  const [mobileMenuDropDown, setDropDown] = useState(false)

  const [desktopMenuDropDown, setDDropDown] = useState(false)
  
  const [userMenuDropDown, setUserDD] = useState(false)

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

  const openUserMenu = () => {
    clearTimeout(timeoutId); 
    setUserDD(true)
  }

  const closeUserMenu = () => {
    timeoutId = setTimeout(() => {
    setUserDD(false);
    }, 100); // 300ms delay before closing
  }
  



  let timeoutId; // Stores the timeout reference

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

    <div className='w-full bg-white shadow-md fixed z-100'>
      <nav className=" w-full flex items-center justify-center sticky max-h-18 md:container md:mx-auto">
      
          {/* Mobile Menu */}
        <div className='w-full flex items-center justify-between md:hidden'>
          <div className="logo ml-4 py-4">
            <LogoIcon className="size-10"/>
          </div>

          {/* Mobile Menu Button */}
          <div className='flex items-center justify-end mr-4 py-4'>
              <Bars3Icon className='size-10' onClick={onClickToOpenMenuOption}/>
          </div>
        {/* Mobile Menu Options */}
          {menuOption &&
              <div id="mobile-options" className="w-full h-auto bg-[#8E74D0] absolute top-full flex flex-col text-sm font-semibold">
              <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4 flex item-center justify-center relative" onClick={ openDropDownMenu }> Home <span> <ChevronDownIcon className='size-4 absolute mt-2 ml-2  '/></span></Link>
              
              {mobileMenuDropDown && 
              <div className='flex flex-col justify-center'>
                  <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> About Pi Day</Link>
                  <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Day Competition</Link>
                  <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Pi Fun Facts</Link>
                  <Link className="w-full flex-grow text-[#8E74D0] bg-[#ffffff] hover:bg-[#efefef] text-lg text-center py-4"> Our Team</Link>
              </div>

              }

              <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> Pratice</Link>
              <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4" to="/admin/setting" > Setting</Link>
              <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4 "  to="/admin/leaderboard"> Dashboard</Link>

              <Link className="w-full flex-grow text-white bg-[#8E74D0] hover:bg-[#886fc7] text-lg text-center py-4"> My Account</Link>
              

              
              </div>
          }
        </div>


          {/* Desktop Menu */}
      <div className='flex  w-full items-center justify-between  '>

          <div className="hidden md:block logo ml-2 py-4">
              <LogoIcon className="size-10"/>
          </div>
      
  
          <div className="w-5/6 hidden md:flex justify-around items-center">
          {/* Left Section */}
          <div className="w-4/5 flex items-center gap-4 justify-center">
          <div 
              className="relative "
              onMouseEnter={openDesktopDropDownMenu} 
              onMouseLeave={closeDesktopDropDownMenu} 
              >
                  {/* Home Link */}
                  <Link className="text-black px-4 hover:text-[#886fc7] py-1 font-medium text-sm lg:text-lg ">
                      Home
                  </Link>

                  {/* Dropdown Menu */}
                  {desktopMenuDropDown && (
                      <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-8 w-36 lg:w-48 bg-white shadow-lg rounded-lg border-[0] z-50 flex flex-col"
                      onMouseEnter={openDesktopDropDownMenu} // Keeps dropdown open
                      onMouseLeave={closeDesktopDropDownMenu} // Delayed close
                      >
                      <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition rounded-t-lg">
                          About Pi Day
                      </Link>
                      <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                          Pi Day Competition
                      </Link>
                      <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition">
                          Pi Fun Facts
                      </Link>
                      <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-3 transition rounded-b-lg">
                          Our Team
                      </Link>
                      </div>
                  )}
              </div>
              <Link className=" text-black  hover:text-[#886fc7] py-1 font-medium  px-4 lg:px6 text-sm lg:text-lg  ">Practice</Link>
              <Link className=" text-black whitespace-nowrap py-1 hover:text-[#886fc7] px-4 lg:px6  font-medium   text-sm lg:text-lg  " to="/admin/setting">Setting</Link>
              <Link className=" text-black  hover:text-[#886fc7] py-1 font-medium px-4 lg:px6  text-sm lg:text-lg  " to="/admin/leaderboard">Dashboard</Link>

          </div>

          {/* Right Section */}
            {/* Acc Menu */}
            
          <div 
              className="relative flex items-center justify-center w-16"
              onMouseEnter={openUserMenu}
              onMouseLeave={closeUserMenu}
          >
              {/* User Icon */}
              <Link className="text-black px-4 py-1">
                  <UserCircleIcon className="size-10 lg:size-12 text-[#886fc7]" />
              </Link>   

              {/* Dropdown Menu */}
              {userMenuDropDown && (
                  <div 
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-32 bg-white shadow-lg rounded-lg border-[0] z-50 flex flex-col items-center"
                  >
                      <Link className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-2 transition rounded-t-lg">
                          My Account
                      </Link>
                      <Link onClick={logOut} className="w-full text-black hover:bg-[#8E74D0] hover:text-white text-sm lg:text-lg text-center py-2 transition rounded-b-lg">
                          Log Out
                      </Link>
                  </div>
              )}
          </div>
          </div>

      </div>

      </nav>
    </div>

  );
}


export default AdminNav;