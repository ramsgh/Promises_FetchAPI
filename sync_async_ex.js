console.log("Start");

// This task is handed off to the browser background environment
setTimeout(() => {
    console.log("Async Task (2 second delay)");
}, 700);

console.log("End");


// Wrapping a standard setTimeout timer inside a Promise
const waitOneSecond = new Promise((resolve, reject) => {
  const success = true; 

  setTimeout(() => {
    if (success) {
      resolve("Timer finished successfully!"); // Moves Promise to 'Fulfilled'
    } else {
      reject("Something went wrong."); // Moves Promise to 'Rejected'
    }
  }, 1000);
});

// Using the custom promise
waitOneSecond
  .then((message) => console.log(message)) // Prints: "Timer finished successfully!"
  .catch((err) => console.error(err));
