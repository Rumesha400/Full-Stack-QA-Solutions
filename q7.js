// Write a program to demonstrate various methods of path module in Node.js.

const path = require('path');

// Define a sample file path
const filePath = '/user/local/bin/node';

// Demonstrate path.basename
console.log('Base Name:', path.basename(filePath)); // Output: node
console.log('Base Name with Extension:', path.basename(filePath, '.node')); // Output: node (extension is not stripped here)

// Demonstrate path.dirname
console.log('Directory Name:', path.dirname(filePath)); // Output: /user/local/bin

// Demonstrate path.extname
console.log('Extension Name:', path.extname(filePath)); // Output: (empty, as there is no extension)

// Define a path with an extension
const filePathWithExt = '/user/local/bin/node.exe';
console.log('Extension Name with Extension:', path.extname(filePathWithExt)); // Output: .exe

// Demonstrate path.join
const joinedPath = path.join('/user', 'local', 'bin', 'node');
console.log('Joined Path:', joinedPath); // Output: /user/local/bin/node

// Demonstrate path.parse
const parsedPath = path.parse(filePathWithExt);
console.log('Parsed Path:', parsedPath);
/*
Output:
{
  root: '/',
  dir: '/user/local/bin',
  base: 'node.exe',
  ext: '.exe',
  name: 'node'
}
*/

