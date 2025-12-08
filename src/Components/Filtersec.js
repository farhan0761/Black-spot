import React, { useState } from 'react';
import './flitersec.css';

export default function Filtersec() {

  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");

 
  const districtData = {
    mp: ["Indore", "Bhopal","Khargone"],
    up: ["Lucknow", "Kanpur", "Varanasi" ],
    mh: ["Mumbai", "Pune", "Nagpur"]
  };

  return (

    <div>


       <div className='filter-heading'>
        View Black Spot By District
       </div>
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
          ))
        }
      </select>

      
      <button className="search-btn">Search</button>

    </div>
    </div>
  );
}
