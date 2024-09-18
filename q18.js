// Write a node.js script to display specific JSON object using RESTful API on express.js

const express = require('express');
const app = express();
const port = 3000;

// Sample JSON array of objects (a mock database)
const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 }
];

// RESTful API to fetch a specific person by id
app.get('/person/:id', (req, res) => {
    const personId = parseInt(req.params.id);  // Get the 'id' from the URL
    const person = people.find(p => p.id === personId);  // Find the person with the matching id

    if (person) {
        res.json(person);  // Send the JSON object if found
    } else {
        res.status(404).json({ error: 'Person not found' });  // Send a 404 error if not found
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
