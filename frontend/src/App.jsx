import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Projects from './pages/Projects';
import Services from './pages/Services';
function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        },
        {
          path:"/projects",
          element:<Projects/>
        },
        {
          path:"/services",
          element:<Services/>
        }
      ]
    }
  ])
  return(
    <RouterProvider router={router}/>
  );
}

export default App
