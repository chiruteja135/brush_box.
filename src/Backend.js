// backend.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Handle form submission
app.post('/api/contact', async (req, res) => {
  const { phone, message } = req.body;

  // Save phone number to database or perform any necessary processing
  // For demonstration, let's assume we just log the received data
  console.log('Received phone number:', phone);

  // Send notification to owner's mobile number (replace with your logic)
  try {
    // Code to send notification (e.g., using Twilio or FCM)
    console.log('Notification sent to owner');
    res.status(200).send('Notification sent');
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).send('Error sending notification');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
