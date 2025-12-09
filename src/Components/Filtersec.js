import React, { useState } from "react";
import "./flitersec.css";
import "./locationpop.css";  // popup CSS yaha hi import kar lo

export default function Filtersec() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [openPopup, setOpenPopup] = useState(false);

  const districtData = {
    mp: ["Indore", "Bhopal", "Khargone"],
    up: ["Lucknow", "Kanpur", "Varanasi"],
    mh: ["Mumbai", "Pune", "Nagpur"],
  };

  return (
    <div className="main-flt">

      <div className="filter-heading">View Black Spot By District</div>

      <div className="filter-container">
        <select
          className="dropdown"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
            setDistrict("");
          }}
        >
          <option value="">Select State</option>
          <option value="mp">Madhya Pradesh</option>
          <option value="up">Uttar Pradesh</option>
          <option value="mh">Maharashtra</option>
        </select>

        <select
          className="dropdown"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        >
          <option value="">Select District</option>

          {state &&
            districtData[state].map((dist, index) => (
              <option key={index} value={dist.toLowerCase()}>
                {dist}
              </option>
            ))}
        </select>

        <button className="search-btn" onClick={() => setOpenPopup(true)}>
          Search
        </button>
      </div>

      
      {openPopup && (
        <div className="popup-overlay">
          <div className="popup-box">

            <button className="close-btn" onClick={() => setOpenPopup(false)}>
              ×
            </button>

            <h2 className="location-section-title">Black Spot Locations</h2>

            <div className="cards-wrapper">

              {/* CARD 1 */}
              <div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>



              <div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>



              <div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>

              <div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>


<div className="location-card">
                <div className="image-background">
                  <p className="location-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 className="card-title">Location :</h3>
                    <p>ijsdijsidj</p>
                  </div>

                  <div className="card-de">
                    <h3 className="card-details">District :- Khargone</h3>
                    <button> More details</button>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      )}
    </div>
  );
}
