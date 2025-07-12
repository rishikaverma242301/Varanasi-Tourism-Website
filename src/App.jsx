import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Home from './Components/Home.jsx';
import JourneyToKashi from './Components/JourneyToKashi.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<JourneyToKashi />} />
      </Routes>
    </Router>
  );
};

export default App;
