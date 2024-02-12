import React from 'react';

const items = [
  {
    name: "Shirt",
    wash: 40,
    iron: 12,
    fold: 10,
    wash_and_fold: 15,
  },
  {
    name: "Pant",
    wash: 40,
    iron: 12,
    fold: 10,
    wash_and_fold: 15,
  },
  {
    name: "Suit",
    wash: 250,
    iron: 80,
    fold: 15,
    wash_and_fold: 15,
  },
  {
    name: "Saree(silk)",
    wash: 350,
    iron: 70,
    fold: 20,
    wash_and_fold: 15,
  },
  {
    name: "Saree(border)",
    wash: 350,
    iron: 60,
    fold: 20,
    wash_and_fold: 15,
  },
  {
    name: "Saree(normal)",
    wash: 350,
    iron: 40,
    fold: 20,
    wash_and_fold: 15,
  },
  // ... other clothing items
];

const services = {
  wash: "Wash",
  iron: "Iron",
  fold: "Fold",
  wash_and_fold: "Wash & Fold", // Corrected property name
};

const Pricing = () => {
 

  return (
    <div className="pricing-container">
      <table>
        <thead>
          <tr>
            <th>Item</th>
            {Object.values(services).map((service) => (
              <th key={service}>{service}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              {Object.values(services).map((service) => {
                const price = item[service === 'Wash & Fold' ? 'wash_and_fold' : service.toLowerCase()]; // Correctly access price
                return (
                  <td key={`${item.name}-${service}`}>
                    {price !== undefined ? price : "N/A"} 
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pricing;
