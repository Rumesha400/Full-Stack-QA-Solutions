// Perform addition of 2 numbers by specifying function definition and call in separate files and exporting them.

// add.js

// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Export the function
  module.exports = add;
  

// index.js

// Import the add function from add.js
const add = require('./add');

// Call the add function with two numbers and print the result
const result = add(5, 7);
console.log('The result of addition is:', result);
