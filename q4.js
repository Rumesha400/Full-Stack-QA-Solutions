// Write a node.js script to read a file and print its contents.

const fs = require('fs');

// Specify the path to the file
const filePath = 'path/to/your/file.txt';

// Read the file asynchronously
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  // Print the contents of the file
  console.log(data);
});
