import React from 'react'

function Footer() {
    return ( 
<footer className="flex w-full flex-col items-center shadow-md">
  <div className="flex w-full flex-col items-center justify-between">
    <div className="flex w-full flex-col items-center justify-center bg-[#8E74D0]">
      <div className="flex w-full items-center justify-center gap-10 py-6">
        <a href="#" className="py-1 text-sm font-medium text-white hover:underline xl:text-sm 2xl:text-xl">Home
        </a>
        <a href="#" className="py-1 text-sm font-medium text-white hover:underline xl:text-sm 2xl:text-xl">Practice
        </a>
        <a href="#" className="py-1 text-sm font-medium text-white hover:underline xl:text-sm 2xl:text-xl">Contact</a>
      </div>
    </div>
    <div className="flex w-full items-center justify-center gap-8 bg-[#55477a] py-4">
      <p className="text-xs text-center text-white xl:text-sm 2xl:text-xl">
      Copyright © 2025 Pi Day Competition | Developed by the BVIS Tech Committee
      </p>
    </div>
  </div>
</footer>

        

     );
}

export default Footer;