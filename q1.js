// Write a JS to create a Person object using JSON. Store name and age inside object. Print details only of elder person.

// Define JSON string with person details
const jsonString = `[
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 45},
    {"name": "Charlie", "age": 25}
  ]`;
  
  // Parse JSON string into an array of objects
  const persons = JSON.parse(jsonString);
  
  // Find the elder person
  const elderPerson = persons.reduce((i, j) => (j.age > i.age ? j : i));
  
  // Print details of the elder person
  console.log(`Name: ${elderPerson.name}`);
  console.log(`Age: ${elderPerson.age}`);
  