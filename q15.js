// Write an express.js script to define one JSON array of 3 objects having members name & age. Sort these 
// objects according to age. Means according to age, names must be sorted. If user requests “sortedName” URL, 
// then all names should be printed according to ascending order of age.

const express = require('express');
const app = express();
const port = 3000;

// Define a JSON array of objects with name and age
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
];

// Define a route to sort and print names according to the ascending order of age
app.get('/sortedName', (req, res) => {
    // Sort the array based on the 'age' property
    const sortedPeople = people.sort((a, b) => a.age - b.age);

    // Extract the sorted names
    const sortedNames = sortedPeople.map(person => person.name);

    // Send the sorted names as the response
    res.send(`Names sorted by age: ${sortedNames.join(', ')}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
