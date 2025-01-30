const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

connectDB();

// Middleware
app.use(express.json());

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
