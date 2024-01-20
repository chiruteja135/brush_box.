// Services.js

import React from 'react';

const servicesData = [
  { title: 'Washing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Steam Ironing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Washing & Ironing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { title: 'Folding', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Services = () => {
  return (
    <div className="services-container">rrrrrr
      {servicesData.map((service, index) => (
        <div key={index} className="service-card">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
