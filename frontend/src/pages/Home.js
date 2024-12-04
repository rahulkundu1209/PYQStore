import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import AuthSection from '../components/AuthSection';
import AllCourses from '../components/AllCourses';

const Home = () => {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div 
      class="items-center justify-center flex flex-col"
    >
      <div>
        {signedIn ? <HeroSection /> : <AuthSection setSignedIn={setSignedIn} /> }
      </div>
        <div>
          <AllCourses />
        </div>
    </div>
  )
}

export default Home
