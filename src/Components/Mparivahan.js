import React from 'react';
import './mparivahan.css';

export default function Mparivahan() {

  const data = [
    { img: "s1.png", name: "Apply / Renew Driving Licence (DL) / Learner Licence (LL)", link: "https://mparivahan.app" },
    { img: "s3.png", name: "Vehicle Registration / New Vehicle Registration / RC", link: "https://parivahansewa.uno" },
    { img: "s2.png", name: "Renew / Update / Duplicate RC (Registration Certificate)", link: "https://parivahansewa.uno" },
    { img: "s8.png", name: "Transfer Vehicle Ownership", link: "https://parivahan.co" },
    { img: "s5.png", name: "Fancy / VIP Number Booking", link: "https://mparivahan.app" },
    { img: "s6.png", name: "Vehicle Permits / Commercial Permits / NOC", link: "https://parivahansewa.uno" },
    { img: "s7.png", name: "Fitness Certificate & Road-Tax & Compliance Services", link: "https://parivahansewas.org" },
    { img: "s4.png", name: "Online e-Challan (Traffic Fine) Checking & Payment", link: "https://mparivahan.app" },
    { img: "s9.png", name: "Digital Driving License (DL) & RC Storage / Download", link: "https://mparivahan.app" },
    { img: "s10.png", name: "Online Appointment / Test Slot Booking (for Licence)", link: "https://mparivahan.app" }
  ];

  return (
    <div>

      {/* 🔵 TOP HEADING SECTION */}
      <div className="mp-heading-section">
        <img src="mseva-image.png" alt="mParivahan Logo" className="mp-heading-logo" />
        <h2 className="mp-heading-title">mParivahan Services</h2>
      </div>

      <div className="mp-container">
        {data.map((item, index) => (
          <div className="mp-card" key={index}>
            <img src={item.img} alt={item.name} className="mp-img" />
            <p className="mp-name">{item.name}</p>
            <a className="mp-link" href={item.link} target="_blank" rel="noreferrer">
              <strong>Link:</strong> {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
