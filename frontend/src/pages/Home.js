import React from 'react'
import HeroSection from '../components/HeroSection';
import AuthSection from '../components/AuthSection';
import AllCourses from '../components/AllCourses';

const Home = () => {
  const signedIn = false;

  return (
    <div 
      class="items-center justify-center flex flex-col"
    >
      <div>
        {signedIn === true ? <HeroSection/> : <AuthSection/>}
      </div>
      <div>
        <AllCourses/>
      </div>
    </div>
  )
}

export default Home
