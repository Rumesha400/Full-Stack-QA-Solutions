// Write a node.js script to jump on a specific code by specifying path on address bar of browser.

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
});

app.get('/contact', (req, res) => {
    res.send('This is the contact page.');
});

// Dynamic route to handle specific code based on path
app.get('/code/:id', (req, res) => {
    const codeId = req.params.id;
    res.send(`You are viewing code section: ${codeId}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
