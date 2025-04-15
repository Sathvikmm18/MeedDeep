import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const fileInputRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      // Handle the uploaded files here
      console.log('Uploaded files:', files);
      // You can add your file processing logic here
    }
  };

  return (
    <div className="app">
      <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="logo">MindDeep</div>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <i className={`fas fa-chevron-${isSidebarOpen ? 'left' : 'right'}`}></i>
          </button>
        </div>
        
        <div className="menu-section">
          <div className="menu-items">
            <div className="menu-item">
              <i className="fas fa-home"></i>
              <span>Home</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-compass"></i>
              <span>Explore</span>
            </div>
          </div>
        </div>

        <div className="menu-section">
          <div className="section-title">Recent</div>
          <div className="menu-items">
            <div className="menu-item">
              <i className="fas fa-history"></i>
              <span>Recent 1</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-history"></i>
              <span>Recent 2</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-history"></i>
              <span>Recent 3</span>
            </div>
          </div>
        </div>

        <div className="menu-section bottom-section">
          <div className="menu-items">
            <div className="menu-item">
              <i className="fas fa-question-circle"></i>
              <span>Help</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-chart-line"></i>
              <span>Activity</span>
            </div>
            <div className="menu-item">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <div className="center-content">
          {/* Center content will go here */}
        </div>
        
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <div className="search-actions">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                multiple
              />
              <button className="upload-btn" onClick={handleUploadClick}>
                <i className="fas fa-upload"></i>
              </button>
              <button className="mic-btn">
                <i className="fas fa-microphone"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
