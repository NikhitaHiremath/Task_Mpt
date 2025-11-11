import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import backgroundVideo from "../assets/background.mp4"; // optional if you have video
// import backgroundImage from "../assets/background.jpg"; // fallback if no video

const Header = () => {
  return (
    <div className="header-container">
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="header-bg">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      {/* Background Overlay */}
      <div className="header-overlay"></div>

      {/* Navbar */}
      <div className="navbar">
        <h2>🌿 Lifestyle & Wellness</h2>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
      </div>

      {/* Main Header Text */}
      <div className="header-content">
        <h1>Live Healthy, Feel Happy</h1>
        <p>Your journey to mindfulness, balance, and better living starts here.</p>
      </div>
    </div>
  );
};

export default Header;
