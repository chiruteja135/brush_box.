import React from "react";
import "./App.css";

import Services from "./Services";
import Pricing from "./Pricing";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brush & Box</h1>
        <h4>One Stop Laundry Services</h4>
      </header>

      <nav>
        <a href="/Home">Home</a>
        <a href="/Services">Services</a>
        <a href="/Pricing">Pricing</a>
        <a href="/Contact">Contact</a>
      </nav>

      <section className="App-section">
        <h2>Welcome to our Laundry Service!</h2>
        <p>
          Comprehensive laundry services offering a one-stop solution for
          washing, steam ironing, and dry cleaning needs.
        </p>
      </section>

      <footer className="App-footer">
        <p>&copy; 2023 Brush & Box </p>
      </footer>
    </div>
  );
}

export default App;
