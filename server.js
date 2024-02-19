const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Mockup = require('./src/models/Mockup');

const app = express();
const PORT = 3001;

// Enable CORS for all requests
app.use(cors());

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
}));

// Connect to MongoDB

mongoose.connect('mongodb+srv://tamtitam:naaerdagenoveR123@rendermesoftly.md9fxio.mongodb.net/Leonardo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to the database'))
  .catch(error => console.error('Error connecting to the database:', error));

// API endpoint to fetch all mockups
// Define route to fetch mockups
// API endpoint to fetch all mockups
app.get('/api/mockups', async (req, res) => {
  try {
    // Fetch mockup data from the database
    const mockups = await Mockup.find();
    // Send mockup data as JSON response
    res.json(mockups);
    console.log('API response data:', mockups); // Log the response data
  } catch (error) {
    // Handle errors
    console.error('Error fetching mockups:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


app.get('/', (req, res) => {
  const collectionName = Mockup.modelName; // Get the collection name associated with Mockup model
  res.send(`Collection associated with Mockup model: ${collectionName}`);
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




