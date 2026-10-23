/**
 * 04-fetch-api-get.js
 * Concepts: Fetch API, GET Requests, Response Handling (response.ok, response.json()), and Error Handling
 */

// Simulated Mock API endpoint URL string
const API_URL = 'https://api.example.com/posts/1';

// 1. DEMO FETCH GET REQUEST LOGIC
function fetchPostData(url) {
  console.log(`Initiating GET request to: ${url}...`);

  // Mocking fetch behavior for demonstration
  const mockFetch = (requestUrl) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (requestUrl.includes('error')) {
          resolve({
            ok: false,
            status: 404,
            statusText: 'Not Found',
            json: () => Promise.resolve({ error: 'Resource missing' })
          });
        } else {
          resolve({
            ok: true,
            status: 200,
            statusText: 'OK',
            json: () => Promise.resolve({
              id: 1,
              title: 'Understanding Asynchronous JavaScript',
              body: 'Promises and Fetch API simplify async workflows in modern JS.'
            })
          });
        }
      }, 1000);
    });
  };

  mockFetch(url)
    .then((response) => {
      // response.ok is true for HTTP status codes 200-299
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status} ${response.statusText}`);
      }
      // Parse JSON response body
      return response.json();
    })
    .then((data) => {
      console.log('Successfully Fetched Data:');
      console.log('   Title:', data.title);
      console.log('   Body:', data.body);
    })
    .catch((error) => {
      // Handles network errors & custom thrown HTTP errors
      console.error('Fetch Error Caught:', error.message);
    })
    .finally(() => {
      console.log('Fetch request lifecycle complete.\n');
    });
}

// Execute successful request
fetchPostData(API_URL);

// Execute request targeting error route
setTimeout(() => {
  fetchPostData('https://api.example.com/posts/error');
}, 2000);
