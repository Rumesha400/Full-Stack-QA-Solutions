// Write a script to declare and array, complement it and calculate its summation. Print complement of each 
// element in green color and print summation in red color.

// npm install chalk

const chalk = require('chalk');

// Define the array
const array = [10, 25, 50, 75, 100];

// Define the maximum value for complement calculation (e.g., 255 for demonstration)
const maxValue = 255;

// Calculate the complement of each element and the summation of complements
const complements = array.map(element => maxValue - element);
const sumOfComplements = complements.reduce((acc, curr) => acc + curr, 0);

// Print the complements in green color
console.log('Complements:');
complements.forEach((complement, index) => {
  console.log(chalk.green(`Element ${index}: ${complement}`));
});

// Print the summation in red color
console.log(chalk.red(`Sum of Complements: ${sumOfComplements}`));
