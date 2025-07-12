
import { createRoot } from 'react-dom/client'


import './index.css'
import App from './App.jsx'



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },{
//     path:"/journey",
//     element:<JourneyToKashi/>
//   },
//     {
//     path:"/culture",
//     element:<Culture/>
//   },
//   {
//     path:"/excursions",
//     element:<Excursions/>
//   },
//     {
//     path:"/stay",
//     element:<Stay/>
//   },
//     {
//     path:"/contact",
//     element:<Contact/>
//   }
// ]) 

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
