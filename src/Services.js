// Services.js

import React from "react";
import "./App.css";

const servicesData = [
  {
    title: "Washing",
    description: "Our classic service includes a thorough wash cycle followed by professional ironing for a crisp, polished finish. Perfect for everyday essentials like shirts, pants, and polos.",
  },
  {
    title: "Steam Ironing",
    description: "This service focuses solely on professional ironing using a powerful steam iron for deep crease removal and a luxurious drape. Ideal for delicate fabrics, dress shirts, and formal wear.",
  
  },
  {
    title: "Washing & Fold",
    description: "Our most convenient option! This service combines a thorough wash cycle with expert folding, delivering your clothes clean, crisp, and ready to wear.",
  },
  {
    title: "Folding",
    description: "Skip the folding chore! We expertly fold and organize your clean laundry, saving you time and effort. Perfect for busy professionals, families, or anyone who enjoys having things perfectly stacked.",
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
