import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShowMaps from './pages/ShowMaps';
import ChargingCalculator from './pages/ChargingCalculator';
import Home from './pages/Home';
import TypesOfEV from './pages/TypesOfEv';
import EvBenefits from './pages/EvBenefits';
import BookMechanic from './pages/BookMechanic';
import Community from './components/Community';

// Import other pages

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/" element={<Home />} />
          <Route path="/show-map" element={<ShowMaps />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/types-of-ev" element={<TypesOfEV/>} />
          <Route path="/benefits-of-ev" element={<EvBenefits/>} />
          <Route path="/book-mechanic" element={<BookMechanic/>} />
          <Route path="/charging-calc" element={<ChargingCalculator/>}/>
          <Route path="/community" element={<Community />} />  {/* Community page */}

          {/* Add other routes as necessary */}
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
