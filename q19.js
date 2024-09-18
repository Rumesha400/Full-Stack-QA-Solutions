// Write a react.js file to pass an integer value to a component, which is defined as a property in app.js file. Fetch 
// that value in component and print its table on console. Write all necessary files.

// App.js
import React from 'react';
import TableComponent from './TableComponent';

function App() {
  const number = 5;  // Integer value to pass as a prop

  return (
    <div>
      <h1>Multiplication Table</h1>
      <TableComponent number={number} /> {/* Passing the prop to the child component */}
    </div>
  );
}

export default App;


// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
