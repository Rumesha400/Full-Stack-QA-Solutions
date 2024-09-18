// Add two JSON objects having members like hours, minutes and seconds. After addition, if seconds goes 
// beyond 60, then minutes should be incremented and if minutes go beyond 60, then hour should be 
// incremented.

// Function to add two time objects
function addTimes(time1, time2) {
    // Extract values from the input objects
    let hours = time1.hours + time2.hours;
    let minutes = time1.minutes + time2.minutes;
    let seconds = time1.seconds + time2.seconds;
  
    // Handle overflow of seconds
    if (seconds >= 60) {
      minutes += Math.floor(seconds / 60);
      seconds = seconds % 60;
    }
  
    // Handle overflow of minutes
    if (minutes >= 60) {
      hours += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
  
    // Return the result as a new object
    return { hours, minutes, seconds };
  }
  
  // Example usage
  const time1 = { hours: 1, minutes: 50, seconds: 45 };
  const time2 = { hours: 2, minutes: 20, seconds: 30 };
  
  console.log(addTimes(time1, time2)); // Output: { hours: 4, minutes: 11, seconds: 15 }
  