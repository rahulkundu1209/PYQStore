import React, {useState , useEffect} from 'react'
import HeroSection from '../components/HeroSection';
import AuthSection from '../components/AuthSection';
import AllCourses from '../components/AllCourses';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Home = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    ); 
  }

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
