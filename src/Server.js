// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000; // Choose a port for your backend server

// Middleware to parse JSON request body
app.use(bodyParser.json());

// POST endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
  const { phone, message } = req.body;

  // Process form data (replace with your logic)
  console.log('Received form submission:');
  console.log('Phone:', phone);
  console.log('Message:', message);

  // Send a response
  res.status(200).json({ success: true, message: 'Form submitted successfully.' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
