import React from 'react'
import './mainMid.css';

export default function MainMidsec() {
  return (
    <div>
     <div className='Midsec-container'>
        <div className='Midsec-heading'>
            <p>Road Safety & Accident Black-Spot  </p>
               <span> Monitoring System</span><br/>
                <label className='lab'>Monitor and manage road accident to improve safety and reduce fatalities </label>
                <div className='Midsec-button'>
                <button>View District Map</button>
                </div>
        </div>
        <div className='Midsec-image'>
             <img src='Demo-image.png' alt='error' />
        </div>
     </div>
    </div>
  )
}
