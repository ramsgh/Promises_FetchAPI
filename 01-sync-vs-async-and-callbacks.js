/**
 * 01-sync-vs-async-and-callbacks.js
 * Concepts: Synchronous vs Asynchronous execution, Callbacks & Callback Hell
 */

// 1. SYNCHRONOUS EXECUTION (Blocking - line by line)
console.log('--- 1. Synchronous Execution ---');
console.log('Step 1: Start');
console.log('Step 2: Processing...');
console.log('Step 3: Finish');


// 2. ASYNCHRONOUS EXECUTION (Non-blocking using setTimeout)
console.log('\n--- 2. Asynchronous Execution ---');
console.log('Async 1: Request initiated');

setTimeout(() => {
  console.log('Async 2: Timer finished (2 seconds later)');
}, 2000);

console.log('Async 3: Program continues without waiting!');


// 3. CALLBACK HELL (Pyramid of Doom)
// When asynchronous tasks depend on previous async results, nested callbacks become hard to read.
console.log('\n--- 3. Callback Hell Example ---');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Fetched user from DB');
    callback({ id: id, username: 'Alex' });
  }, 1000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log(`Fetched orders for user ${userId}`);
    callback(['Order #101', 'Order #102']);
  }, 1000);
}

function getPaymentStatus(orderId, callback) {
  setTimeout(() => {
    console.log(`Fetched payment for ${orderId}`);
    callback('PAID');
  }, 1000);
}

// Nested Pyramid of Doom (Callback Hell):
getUser(1, (user) => {
  getOrders(user.id, (orders) => {
    getPaymentStatus(orders[0], (status) => {
      console.log(`Result: ${user.username}'s ${orders[0]} status is ${status}`);
    });
  });
});
