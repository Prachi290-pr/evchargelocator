import React from 'react';

const WhatsNew = () => {
  return (
    <section className="whats-new">
      <h2>E-Mobility at a Glance</h2>
      <p>India stands at the cusp of a ground-breaking revolution in Electric Mobility</p>
      <div className="whats-new-cards">
        <div className="card">
          <img src="path/to/your/icon1.png" alt="EV Registered" />
          <h3>7,59,182</h3>
          <p>Electric Vehicles have been registered till today</p>
        </div>
        <div className="card">
          <img src="path/to/your/icon2.png" alt="State Policies" />
          <h3>25+</h3>
          <p>States have notified or drafted state Electric Vehicle policies</p>
        </div>
        <div className="card">
          <img src="path/to/your/icon3.png" alt="Manufacturers" />
          <h3>380</h3>
          <p>Electric Vehicle manufacturers operate in India</p>
        </div>
        <div className="card">
          <img src="path/to/your/icon4.png" alt="Charging Stations" />
          <h3>1800</h3>
          <p>Electric Vehicle Charging Stations have already been installed</p>
        </div>
      </div>
    </section>
  );
}

export default WhatsNew;
