import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/home" className="logo-placeholder">Logo</Link>
      </div>
      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;