import React from "react";
import "./footer.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "./logo-mage.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo-img" />

          <div className="footer-brand-text">
            <h2 className="footer-title">Road Safety & Accident</h2>
            <p className="footer-subtitle">Blases & Monitoring system</p>
          </div>
        </div>


        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <a href="#">Contact us</a>
          <a href="#">About us</a>
          <a href="#">View District Map</a>
        </div>

        
        <div className="footer-section">
          <h3 className="footer-heading">Legal</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Of Use</a>
          <a href="#">Disclaimer</a>
        </div>

       
        <div className="footer-section">
          <h3 className="footer-heading">Contact us</h3>
          <p className="footer-info">
            <FaMapMarkerAlt className="icon" /> City Transport Office
          </p>
          <p className="footer-info">
            <FaPhoneAlt className="icon" /> +91 XXXXXXXXXX
          </p>
          <p className="footer-info">
            <FaEnvelope className="icon" /> support@gov.in
          </p>
        </div>
      </div>

      {/* ---- COPYRIGHT ---- */}
      <p className="footer-copy">
        © 2025 Road Safety & Accident Blases & Monitoring system
      </p>
    </footer>
  );
}
