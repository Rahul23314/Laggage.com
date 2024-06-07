import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="about-us-container">
        <p>
          At Luggage.com, we specialize in efficient and cost-effective luggage transportation
          services. Our mission is to ensure your luggage reaches its destination safely and on time.
          Whether it's local or long-distance, trust us to handle your luggage with care.
        </p>
        <a href="/" className="cta-button">Learn More</a>
      </div>
    </div>
  );
}
