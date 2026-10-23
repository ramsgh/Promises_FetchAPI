// --- SYNCHRONOUS EXAMPLE ---
console.log("Start");

function syncTask() {
  // Imagine this takes 2 seconds to calculate
  console.log("Processing synchronous task...");
}

syncTask();
console.log("End");
// Output order: Start -> Processing synchronous task... -> End


// --- ASYNCHRONOUS EXAMPLE ---
console.log("\nStart Async");

setTimeout(() => {
  console.log("Async task finished after 2 seconds");
}, 2000);

console.log("End Async");
// Output order: Start Async -> End Async -> (2 seconds later) -> Async task finished after 2 seconds
