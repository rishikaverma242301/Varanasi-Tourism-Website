import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Slider from './Components/Slider';
import Excursion from './Components/Excursions';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/* Include your View All Button here if needed */}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excursions" element={<ExcursionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
