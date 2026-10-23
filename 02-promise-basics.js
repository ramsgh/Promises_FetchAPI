/**
 * 02-promise-basics.js
 * Concepts: new Promise, .then(), .catch(), .finally(), and flattening callback hell
 */

// 1. CREATING A PROMISE
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId > 0) {
        resolve({ id: userId, name: 'Sarah', role: 'Developer' });
      } else {
        reject(new Error('Invalid User ID! ID must be greater than 0.'));
      }
    }, 1000);
  });
}

//Task 2
// 2. CONSUMING A PROMISE (.then, .catch, .finally)
console.log('Fetching user data...'); 


//Task 1
fetchUserData(101)
  .then((user) => {
    console.log('Success (.then):', user);
    return user.role;
  })
  .then((role) => {
    console.log('User Role:', role);
  })
  .catch((error) => {
    console.error('Error (.catch):', error.message);
  })
  .finally(() => {
    console.log('Cleanup (.finally): Runs regardless of success or failure!\n');
  });

  //Task 3
  console.log('Checking Async Log ..'); 


// 3. REFACTORED CALLBACK HELL USING PROMISE CHAINING
function step1() {
  return new Promise((resolve) => setTimeout(() => resolve('Step 1 Complete'), 500));
}
function step2(prev) {
  return new Promise((resolve) => setTimeout(() => resolve(`${prev} -> Step 2 Complete`), 500));
}
function step3(prev) {
  return new Promise((resolve) => setTimeout(() => resolve(`${prev} -> Step 3 Complete`), 500));
}

step1()
  .then((res1) => step2(res1))
  .then((res2) => step3(res2))
  .then((finalResult) => console.log('Chained Pipeline Result:', finalResult));
