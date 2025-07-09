
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router'
import Home from './Components/Home.jsx'
import JourneyToKashi from './Components/JourneyToKashi.jsx'
import Culture from './Components/Culture.jsx'
import Excursions from './Components/Excursions.jsx'
import Stay from './Components/Stay.jsx'
import Contact from './Components/Contact.jsx'

import './index.css'
import App from './App.jsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },{
    path:"/journey",
    element:<JourneyToKashi/>
  },
    {
    path:"/culture",
    element:<Culture/>
  },
  {
    path:"/excursions",
    element:<Excursions/>
  },
    {
    path:"/stay",
    element:<Stay/>
  },
    {
    path:"/contact",
    element:<Contact/>
  }
]) 

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
)
