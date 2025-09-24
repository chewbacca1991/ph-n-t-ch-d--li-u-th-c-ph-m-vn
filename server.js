const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food_data';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Additional options can be added here if needed
})
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the food data analytics API!');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});