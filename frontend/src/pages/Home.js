import React, {useState , useEffect, useContext} from 'react'
import HeroSection from '../components/HeroSection';
import AuthSection from '../components/AuthSection';
import AllCourses from '../components/AllCourses';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthContext } from '../App';

const Home = () => {
  const {signedIn, setSignedIn} = useAuthContext();
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
        {signedIn ? <HeroSection /> : <AuthSection/> }
      </div>
        <div>
          <AllCourses />
        </div>
    </div>
  )
}

export default Home