


import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Services from './Services';
import Pricing from './Pricing';
import Contact from './Contact';

function Home() {
  return (
    <section className="App-section">
      <h2>Welcome to our Laundry Service!</h2>
      <p>
        Comprehensive laundry services offering a one-stop solution for
        washing, steam ironing, and dry cleaning needs.
      </p>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brush & Box</h1>
        <h4>One Stop Laundry Services</h4>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/Services">Services</Link>
        <Link to="/Pricing">Pricing</Link>
        <Link to="/Contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <footer className="App-footer">
        <p>&copy; 2024 Brush & Box </p>
      </footer>
    </div>
  );
}

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;

