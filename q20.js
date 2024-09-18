// Write an event handling script to convert all typed letters of text-field to uppercase onChange. Print converted 
// string to suitable HTML tag.

import React, { useState } from 'react';

function App() {
  // State to hold the value of the text field
  const [text, setText] = useState('');

  // Function to handle the onChange event and convert input to uppercase
  const handleChange = (event) => {
    const upperCaseText = event.target.value.toUpperCase();  // Convert to uppercase
    setText(upperCaseText);  // Update the state with the uppercase text
  };

  return (
    <div>
      <h1>Type in the text field:</h1>
      
      {/* Text field with onChange event */}
      <input 
        type="text" 
        placeholder="Type something..." 
        value={text} 
        onChange={handleChange} 
      />
      
      {/* Display the uppercase text in a paragraph */}
      <p>Converted Text: {text}</p>
    </div>
  );
}

export default App;
