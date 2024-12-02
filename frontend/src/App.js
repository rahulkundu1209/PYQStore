import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import RootLayout from './pages/RootLayout';

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
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
