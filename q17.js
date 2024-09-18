// Demonstrate session handling by creating a hit counter of a website

const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

// Use express-session middleware
app.use(session({
  secret: 'your-secret-key',  // Replace with a secure key
  resave: false,              // Prevent session resaving when not modified
  saveUninitialized: true,    // Save uninitialized sessions
  cookie: { maxAge: 60000 }   // Set cookie expiration (1 minute)
}));

// Route to handle hit counter
app.get('/', (req, res) => {
  // Check if session counter exists, if not, initialize it
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }

  // Send the response with the current view count
  res.send(`<h1>You have visited this page ${req.session.views} times</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
