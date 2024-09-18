// Write a JS to store an array of objects having height and name. Display names by sorting an array according to height.


const people = [
    { name: "Alice", height: 165 },
    { name: "Bob", height: 180 },
    { name: "Charlie", height: 170 }
];
  
// Sort the array
people.sort((a, b) => a.height - b.height);

// Display 
people.forEach(person => console.log(person.name));
  