// Write a node.js script to print 3 different JSON objects by specifying corresponding object name on address 
// bar

const express = require('express');
const app = express();
const port = 3000;

// Define the JSON objects
const jsonObjects = {
    user: { name: "Alice", age: 30, occupation: "Engineer" },
    product: { id: 101, name: "Laptop", price: 1200 },
    company: { name: "Tech Corp", location: "New York", employees: 500 }
};

// Define routes to serve JSON objects based on the URL path
app.get('/:objectName', (req, res) => {
    const objectName = req.params.objectName;
    const jsonObject = jsonObjects[objectName];

    if (jsonObject) {
        res.json(jsonObject);
    } else {
        res.status(404).send('Object not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
