// Demonstrate create, read and delete operations on cookie. 
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;
app.use(cookieParser());
// Route to create a cookie
app.get('/createCookie', (req, res) => {
  res.cookie('user', 'John Doe', { maxAge: 3600000, httpOnly: true });
  res.send('Cookie has been created!');
});
// Route to read cookies
app.get('/readCookie', (req, res) => {
  const cookies = req.cookies;
  if (cookies.user) {
    res.send(`Cookie Value: ${cookies.user}`);
  } else {
    res.send('No cookies found');
  }
});

// Route to delete a cookie
app.get('/deleteCookie', (req, res) => {
  // Delete the cookie named 'user'
  res.clearCookie('user');
  res.send('Cookie has been deleted');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
