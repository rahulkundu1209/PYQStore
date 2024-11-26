import React from 'react'
import NavbarBackground from './NavbarBackground';
import logo from '../assets/logo.png';

const NavBar = () => {
  return (
    <>
      <NavbarBackground />
      <div
        class="flex justify-between ml-10 mr-10 mt-5"
      >
        <div>
          <img src={logo} width="150px" height="auto" />
        </div>
        <div>
          <button class="font-bold text-2xl text-[#E98074] hover:text-[#E85A4F]">
            ALL COURSES
          </button>
        </div>
        <div>
          <button
            class="
            bg-[#D8C3A5] 
            p-2 
            rounded-md 
            text-xl 
            font-semibold 
            hover:bg-[#E98074]
            hover:text-[#FFFFFF]"
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  )
}

export default NavBar
