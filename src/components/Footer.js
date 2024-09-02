import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <div className="icon">FB</div>
        <div className="icon">TW</div>
        <div className="icon">IG</div>
      </div>
      <div className="footer-menu">
        <a href="/home">Home</a>
        <a href="/rooms">Rooms</a>
        <a href="/events">Events</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
      <p>Sunningdale House © 2024. All rights reserved.</p>
    </footer>
  );
}

export default Footer;