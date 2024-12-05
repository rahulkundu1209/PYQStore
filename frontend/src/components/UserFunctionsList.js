import { getAuth } from 'firebase/auth'
import React from 'react'

const UserFunctionsList = () => {
  const auth = getAuth();

  const signOutHandler = () =>{
    auth.signOut().then(() =>{
      alert("Signed out successfully!")
    }).catch((error) =>{
      alert(error);
    });
  }

  return (
    <div
      class="absolute bg-[#EAE7DC] w-40 -ml-32 p-3 rounded-xl z-20 shadow-md"
    >
      <ul class="*:mb-2 *:hover:cursor-pointer *:p-1 *:rounded-md">
        <li class="hover:bg-[#ffffff]">Saved Papers</li>
        <li class="hover:bg-[#ffffff]">Uploaded Papers</li>
        <li class="hover:bg-[#ffffff]">Profile Settings</li>
        <li 
        class="hover:bg-[#ffffff]"
        onClick={signOutHandler}
        >
          Sign Out
          </li>
      </ul>
    </div>
  )
}

export default UserFunctionsList
