import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import RootLayout from './pages/RootLayout';
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export function useAuthContext() {
  return useContext(AuthContext);
}

function App() {
  const router = createBrowserRouter([
    { path: '/', 
      element: <RootLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        { 
          path: '/course/:cid', 
          element: <Course/>,
        }
      ]
    }
  ]);

  const [signedIn, setSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{signedIn, setSignedIn}}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;