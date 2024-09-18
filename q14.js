// Perform routing by specifying one page name on address bar using express.js.
const express = require('express');
const app = express();
const port = 3000;

// Route for the homepage
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

// Route for the "about" page
app.get('/about', (req, res) => {
    res.send('<h1>This is the About Page</h1>');
});

// Route for the "contact" page
app.get('/contact', (req, res) => {
    res.send('<h1>This is the Contact Page</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
