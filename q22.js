// Fetch all records of an object in sorted manner of record ID.

//USER.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

//App.js
const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Read (GET): Fetch all users sorted by _id
app.get('/users', async (req, res) => {
  try {
    // Fetch and sort users by _id in ascending order
    const users = await User.find().sort({ _id: 1 });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
