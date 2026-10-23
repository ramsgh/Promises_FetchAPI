

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



// Simulating three separate API requests running at once
const fetchUsers = new Promise(res => setTimeout(() => res("User List"), 1000));
const fetchPosts = new Promise(res => setTimeout(() => res("Post List"), 2000));
const fetchTags  = new Promise(res => setTimeout(() => res("Tag List"), 500));

// Run them concurrently instead of waiting 1 + 2 + 0.5 = 3.5 seconds
Promise.all([fetchUsers, fetchPosts, fetchTags])
  .then((results) => {
    // Total wait time is only 2 seconds (the length of the longest promise)
    console.log(results); 
    // Output: ["User List", "Post List", "Tag List"]
  })
  .catch((error) => {
    console.error("One of the requests failed!", error);
  });
