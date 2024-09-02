import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon">FB</div>
        <div className="icon">TW</div>
        <div className="icon">IG</div>
      </div>
      <div className="footer-menu">

        <Link to="/">Home</Link>
        <Link to="/reserve">Reserve</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms">Terms of Service</Link>

      </div>
      <p>Sunningdale House © 2024. All rights reserved.</p>
    </footer>
  );
}

export default Footer;