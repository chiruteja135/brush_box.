// Services.js

import React from "react";
import "./App.css";

const servicesData = [
  {
    title: "Washing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Steam Ironing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Washing & Ironing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Folding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          {
            // Check if mobile screen using media query
            window.innerWidth <= 768 ? null : ( <p>{service.description}</p>) // Render description for desktop Don't render description for mobile
          }
        </div>
      ))}
    </div>
  );
};

export default Services;
