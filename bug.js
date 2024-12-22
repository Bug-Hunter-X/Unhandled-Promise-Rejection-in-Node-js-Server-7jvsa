const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//Error: Unhandled promise rejection
//This is a common error in Node.js, often caused by an unhandled rejection in a Promise.
//In this example, we simulate an error that will lead to an unhandled promise rejection.

// Simulate an asynchronous operation that may fail
const asyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a failure
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
};

asyncOperation()
  .then(() => {
    console.log('Operation successful!');
  })
  .catch(err => {
    console.error('Operation failed:', err);
  });