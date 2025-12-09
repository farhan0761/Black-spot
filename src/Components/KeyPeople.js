import React from "react";
import "./keypeople.css";

export default function KeyPeople() {
  const people = [
    {
      img: "bharat-yadav (1).png",
      name: "Bharat Yadav",
      role: "Managing Director of MPRDC",
      desc: "Leads the overall operations and strategic planning of MPRDC. Oversees road development projects across Madhya Pradesh, ensuring quality, timely completion, and efficient management of funds and resources. "
    },
    {
      img: "bharat-yadav (4).png",
      name: "Pradeep Jain",
      role: "Chief General Manager MPRDC",
      desc: " Responsible for administrative functions, personnel management, and coordination between different departments. Ensures smooth functioning of MPRDC’s internal processes and compliance with government policies."
    },
    {
      img: "gg.png",
      name: "R. K. Mehra",
      role: "Technical Advisor, MPRDC",
      desc: "Provides expert technical guidance on road construction, maintenance, and infrastructure projects. Advises on best practices, innovative solutions, and quality standards for highway development."
    },
    {
      img: "gggg.png",
      name: "Ashok Bansal",
      role: "Environmental Safeguard Expert",
      desc: "Focuses on environmental compliance and sustainability in road projects. Ensures that construction activities adhere to environmental regulations and minimize ecological impact."
    }
  ];

  return (
    <div className="kp-section">
      
      {/* 🔥 Heading Added Here */}
      <h2 className="kp-heading">
        Key People of MP Road Development Corporation
      </h2>

      <div className="kp-wrapper">
        {people.map((p, index) => (
          <div className="kp-card" key={index}>
            <div className="kp-img-box">
              <img src={p.img} alt={p.name} />
            </div>

            <div className="kp-content">
              <h3 className="kp-name">
                Name: <span className="value">{p.name}</span>
              </h3>

              <p className="kp-role">
                Role: <span className="value">{p.role}</span>
              </p>

              <p className="kp-desc">
                Description: <span className="value">{p.desc}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
