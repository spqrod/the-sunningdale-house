import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Events from './pages/Events';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import './style.css';  // Import the combined styles here

function App() {
  return (
    <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/events" element={<Events />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>    
      <Footer />
    </Router>
  );
}

export default App;