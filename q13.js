const EventEmitter = require('events');

// Create a new instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define two listener functions (callbacks)
function listenerOne() {
    console.log('Listener One is called.');
}

function listenerTwo() {
    console.log('Listener Two is called.');
}

// Register both listeners for a common event 'myEvent'
eventEmitter.on('myEvent', listenerOne);
eventEmitter.on('myEvent', listenerTwo);

// Call both listeners by emitting the 'myEvent'
console.log('Calling listeners for the first time:');
eventEmitter.emit('myEvent');

// Print the number of listeners for 'myEvent'
console.log(`Number of listeners for 'myEvent': ${eventEmitter.listenerCount('myEvent')}`);

// Remove one listener (listenerOne)
eventEmitter.removeListener('myEvent', listenerOne);

// Call the remaining listeners by emitting the event again
console.log('\nCalling remaining listeners after removing one:');
eventEmitter.emit('myEvent');

// Print the number of listeners after removing one
console.log(`Number of remaining listeners for 'myEvent': ${eventEmitter.listenerCount('myEvent')}`);
