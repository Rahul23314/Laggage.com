import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import videoBackground from './assets/Background_video.mp4';

export default function Home() {
  return (
    <div>
      <div className="video-background-container">
        <video autoPlay loop muted className="video-background">
          <source src={videoBackground} type="video/mp4" />
        </video>
        <div className="auto-type">
          {/* TypeAnimation component for auto-typing */}
          <TypeAnimation
            sequence={[
              'Welcome to Luggage.com', 2000,
              'Your Luggage is Our Priority', 2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="typed-text" // Apply typed-text class to the animated text 
            />
        </div>
      </div>
    </div>
  );
}
