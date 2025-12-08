import React, { useState } from 'react';
import './mainPagelogo.css';

export default function MainPage() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className='main-nav'>

          <div className='nav-logo'>
            <img src='logo-mage.png' alt='error' />
            <div className='site-name'>
              <p>Road Safety & Accident</p>
              <label>Blases & Monitoring system</label>
            </div>
          </div>

          {/* Hamburger */}
          <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          
          <div className={`nav-item ${open ? "open" : ""}`}>
            <p>Home</p>
            <p>Road Signs</p>
            <p className='item-scheme'>Scheme</p>
            <p>Contact us</p>
            <p>About us</p>
          </div>

        </div>
      </nav>
    </div>
  );
}
