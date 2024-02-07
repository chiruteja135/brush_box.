import React from 'react';

const items = [
  {
    name: "Shirt",
    wash: 5,
    iron: 3,
    fold: 2,
    wash_and_fold: 15,
  },
  {
    name: "Pant",
    wash: 7,
    iron: 4,
    fold: 2,
    wash_and_fold: 15,
  },
  {
    name: "Blouse",
    wash: 7,
    iron: 4,
    fold: 2,
    wash_and_fold: 15,
  },
  {
    name: "Saree",
    wash: 7,
    iron: 4,
    fold: 2,
    wash_and_fold: 15,
  },
  {
    name: "Salwar",
    wash: 7,
    iron: 4,
    fold: 2,
    wash_and_fold: 15,
  },
  {
    name: "Suit",
    wash: 52,
    iron: 4,
    fold: 2,
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
  console.log("Initial `items` array:");
  console.log(items); // Log the entire array

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
