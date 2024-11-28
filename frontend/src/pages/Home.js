import React from 'react'
import HeroSection from '../components/HeroSection';
import AuthSection from '../components/AuthSection';

const Home = () => {
  const signedIn = true;
  return (
    <div 
      class="items-center justify-center flex flex-col"
    >
      <div>
        {signedIn === true ? <HeroSection/> : <AuthSection/>}
      </div>
      <div>
        All courses will go here
      </div>
    </div>
  )
}

export default Home
