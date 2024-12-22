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
    console.error('Operation failed:', err); // Handle the rejection here
  });

//Use process.on('unhandledRejection', ... ) to handle globally unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    //Application specific logging, throwing an error, or other logic here
});