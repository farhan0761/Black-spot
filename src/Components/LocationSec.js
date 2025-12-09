import React from 'react';
import './location.css';

export default function LocationSec() {
  return (
    <div className="location-section-wrapper">
      {/* ---- Common Heading ---- */}
      <h2 className="location-section-title">Black Spot Locations</h2>

      <div className="cards-wrapper">
        <div className="location-card">
          <div className="image-background">
            <p className='location-icon'><i class="fa-solid fa-location-dot"></i></p>
          </div>
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Location :</h3>
              <p>ijsdijsidj</p>
            </div>
            <div className='card-de'>
              <h3 className="card-details">District :- Khargone</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>

        {/* Repeat other cards... */}
        <div className="location-card">
          <div className="image-background">
            <p className='location-icon'><i class="fa-solid fa-location-dot"></i></p>
          </div>
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Location :</h3>
              <p>ijsdijsidj</p>
            </div>
            <div className='card-de'>
              <h3 className="card-details">District :- Khargone</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="location-card">
          <div className="image-background">
            <p className='location-icon'><i class="fa-solid fa-location-dot"></i></p>
          </div>
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Location :</h3>
              <p>ijsdijsidj</p>
            </div>
            <div className='card-de'>
              <h3 className="card-details">District :- Khargone</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="location-card">
          <div className="image-background">
            <p className='location-icon'><i class="fa-solid fa-location-dot"></i></p>
          </div>
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-title">Location :</h3>
              <p>ijsdijsidj</p>
            </div>
            <div className='card-de'>
              <h3 className="card-details">District :- Khargone</h3>
              <button>Read More</button>
            </div>
          </div>
        </div>

        {/* Add remaining cards as needed */}
      </div>
    </div>
  );
}
