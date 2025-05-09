import React, { useState, useEffect } from 'react';
import './Introduction.css';

const Introduction = ({ onClose }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowSplash(false);
  };

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <img 
            src="/logo.svg" 
            alt="MindDeep Logo" 
            className="splash-logo"
          />
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="introduction-container">
      <button className="intro-close-btn" onClick={onClose}>
        <i className="fas fa-times"></i>
      </button>
      <div className="logo-container">
        <img 
          src="/logo.svg" 
          alt="MindDeep Logo" 
          className="logo-image"
        />
      </div>
      <div className="welcome-text">
        <h1>Welcome to MindDeep</h1>
        <p>Your AI-powered Multi LLM</p>
        <div className="features">
          <div className="feature">
            <i className="fas fa-brain"></i>
            <span>Support Multi-LLM</span>
          </div>
          <div className="feature">
            <i className="fas fa-folder-tree"></i>
            <span>Intelligent AI</span>
          </div>
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <span>Deep Insights</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction; 