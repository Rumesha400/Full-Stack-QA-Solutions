// Write a program to sort an integer array, where all elements are available in a file separated by white space. 

const fs = require('fs');

// Path to the file
const filePath = 'path/to/your/file.txt';

// Read the file content
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Split the data into an array of integers
  const numbers = data.split(/\s+/).map(Number);

  // Check for non-integer values
  if (numbers.some(isNaN)) {
    console.error('File contains non-integer values.');
    return;
  }

  // Sort the array
  numbers.sort((a, b) => a - b)

  // Write the sorted array back to the file
  fs.writeFile(filePath, sortedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }

    console.log('File sorted successfully.');
  });
});
