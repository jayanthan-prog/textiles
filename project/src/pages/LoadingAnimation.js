import React from 'react';
import './LoadingAnimation.css'; // Import the CSS file
import logo from './path-to-your-logo/Ashok-Final-Logo-2.png'; // Update the path

const LoadingAnimation = () => {
  return (
    <div className="loading-container">
      <img src={logo} alt="Loading..." className="loading-logo" />
    </div>
  );
};

export default LoadingAnimation;
