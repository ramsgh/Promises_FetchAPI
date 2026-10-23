/**
 * 03-promise-combinators.js
 * Concepts: Promise.all, Promise.race, Promise.allSettled
 */

const slowTask = new Promise((resolve) => setTimeout(() => resolve('Slow Task (3s)'), 3000));
const fastTask = new Promise((resolve) => setTimeout(() => resolve('Fast Task (1s)'), 1000));
const failingTask = new Promise((_, reject) => setTimeout(() => reject(new Error('Task Failed!')), 1500));


// 1. Promise.all() -> Runs all in parallel. Fails fast if ANY promise rejects.
console.log('Starting Promise.all()...');
Promise.all([slowTask, fastTask])
  .then((results) => {
    console.log('Promise.all Success:', results);
  })
  .catch((err) => {
    console.error('Promise.all Error:', err.message);
  });


// 2. Promise.race() -> Returns as soon as the FIRST promise resolves OR rejects.
console.log('Starting Promise.race()...');
Promise.race([slowTask, fastTask])
  .then((winner) => {
    console.log('Promise.race Winner:', winner);
  });


// 3. Promise.allSettled() -> Waits for ALL promises to complete, returning statuses.
console.log('Starting Promise.allSettled()...');
Promise.allSettled([slowTask, fastTask, failingTask])
  .then((results) => {
    console.log('\nPromise.allSettled Results:');
    results.forEach((res, index) => {
      if (res.status === 'fulfilled') {
        console.log(`  Task ${index + 1}: Fulfilled with value "${res.value}"`);
      } else {
        console.log(`  Task ${index + 1}: Rejected with reason "${res.reason.message}"`);
      }
    });
  });
