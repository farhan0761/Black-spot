import React from 'react';
import './location.css';

export default function LocationSec() {
  return (
    <div className="cards-wrapper">
      <div className="location-card">
        <div className="image-background">
          <p className='location-icon'>📍</p>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">Location Name 1</h3>
          </div>
          <p className="card-details">
            This is a short description of the location. You can add more details here.
          </p>
        </div>
      </div>

      <div className="location-card">
        <div className="image-background">
          <p className='location-icon'>📍</p>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">Location Name 2</h3>
          </div>
          <p className="card-details">
            This is a short description of the location. You can add more details here.
          </p>
        </div>
      </div>

      <div className="location-card">
        <div className="image-background">
          <p className='location-icon'>📍</p>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">Location Name 3</h3>
          </div>
          <p className="card-details">
            This is a short description of the location. You can add more details here.
          </p>
        </div>
      </div>

      <div className="location-card">
        <div className="image-background">
          <p className='location-icon'>📍</p>
        </div>
        <div className="card-content">
          <div className="card-header">
            <h3 className="card-title">Location Name 4</h3>
          </div>
          <p className="card-details">
            This is a short description of the location. You can add more details here.
          </p>
        </div>
      </div>
    </div>
  );
}
