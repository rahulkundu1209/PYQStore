import React, { useState } from 'react'
import NavbarBackground from './NavbarBackground';
import logo from '../assets/logo.png';
import coin from '../assets/coin.png';
import userIcon from '../assets/user.png';
import UserFunctionsList from './UserFunctionsList';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../App';

const NavBar = () => {
  const {signedIn, setSignedIn} = useAuthContext();
  const [showList, setShowList] = useState(false);

  return (
    <>
      <NavbarBackground />
      <div
        class="flex justify-between ml-10 mr-10 mt-5"
      >
        <div>
          <Link to="/">
            <img src={logo} alt='PYQ Store' width="150px" height="auto" />
          </Link>
        </div>
        <div>
          <button class="font-bold text-2xl text-[#E98074] hover:text-[#E85A4F]">
            ALL COURSES
          </button>
        </div>
        <div>
          {signedIn === true ?
            <div
              class="w-fit flex flex-row"
            >
              <div
                class="flex flex-row mr-8 items-center"
              >
                <img src={coin} alt='coin' width="20px" height="20px" />
                <h3 class="ml-2 font-bold text-xl">8</h3>
              </div>
              <div
                onClick={() => { setShowList(!showList) }}
              >
                <img class="hover:cursor-pointer" src={userIcon} alt='user-image' width="40px" height="40px" />
                {showList && <UserFunctionsList />}
              </div>
            </div>
            : <button
              class="
            bg-[#D8C3A5] 
            p-2 
            rounded-md 
            border-none
            text-xl 
            font-semibold 
            hover:bg-[#E98074]
            hover:text-[#FFFFFF]"
            >
              Sign In
            </button>}
        </div>
      </div>
    </>
  )
}

export default NavBar
