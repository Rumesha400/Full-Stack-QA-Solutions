// Write a node.js script to write contents to the file in original manner. Delete file after finishing writing.

const fs = require('fs');

// Path to the file
const filePath = 'path/to/your/file.txt';

// Content to write
const content = 'Hello, this is the content of the file.';

// Write content to the file
fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }

  console.log('File written successfully.');

  // Delete the file after writing
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting the file:', err);
      return;
    }

    console.log('File deleted successfully.');
  });
});
