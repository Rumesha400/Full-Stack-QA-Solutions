// Demonstrate CRUD operations on MongoDB

const mongoose = require('mongoose');

// Replace with your MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/crud_demo';  // If using MongoDB Atlas, replace with the Atlas URL

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// USER.js
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


// APP.js
const express = require('express');
const connectDB = require('./db');
const User = require('./models/User');

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Create (POST): Add a new user
app.post('/users', async (req, res) => {
  const { name, age, email } = req.body;
  
  try {
    const user = new User({ name, age, email });
    await user.save();
    res.status(201).json(user);  // 201: Created
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read (GET): Fetch all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read (GET): Fetch a single user by ID
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update (PUT): Update a user's details by ID
app.put('/users/:id', async (req, res) => {
  const { name, age, email } = req.body;
  
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, age, email },
      { new: true, runValidators: true }  // Return updated object
    );
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete (DELETE): Delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
