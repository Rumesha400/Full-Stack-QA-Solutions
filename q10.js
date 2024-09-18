// Write a node.js script to load a simple.html file on NodeJS server and print its contents


const http = require('http');
const fs = require('fs');
const path = require('path');

// Path to the HTML file
const filePath = path.join(__dirname, 'simple.html');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading file');
      return;
    }

    // Print the file contents to the console
    console.log(data);

    // Serve the HTML file to the client
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
