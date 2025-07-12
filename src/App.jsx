import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Home from './Components/Home.jsx';
import JourneyToKashi from './Components/JourneyToKashi.jsx'

import Culture from './Components/Culture.jsx'
import Excursions from './Components/Excursions.jsx'
import Stay from './Components/Stay.jsx'
import Contact from './Components/Contact.jsx'



const App = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/journey" element={<JourneyToKashi />} />
        <Route path="/" element={<Home />} />
           <Route path="/culture" element={<Culture />} />
              <Route path="/excursions" element={<Excursions />} />
                 <Route path="/stay" element={<Stay />} />
                    <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
