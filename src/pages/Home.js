import React from 'react';
import '../styles/Home.css';
import carImage from '../assets/car.png';
import WhatsNew from '../components/Whatsnew';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <section className="home">
        <Navbar />
        <div className="mainhome">
        <div className="home-content">
            <h1>Navigating the digital landscape for success</h1>
            <p>Whether you’re planning a long road trip or just need a quick charge in the city, ChargeFinder provides real-time data on the nearest charging points, complete with availability, pricing, and user reviews.</p>
            <button className="home-button">Show Maps</button>
          </div>
          <div className="home-image">
            <img src={carImage} alt="Electric car charging" />
          </div>
        </div>
          

          <div className='whatsnew'>
          <WhatsNew />
          </div>
          
        </section>
        
      );
}

export default Home;