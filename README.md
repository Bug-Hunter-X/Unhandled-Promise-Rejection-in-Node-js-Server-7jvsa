# Unhandled Promise Rejection in Node.js Server
This repository demonstrates a common error in Node.js: unhandled promise rejections.  A simple HTTP server is created, but an asynchronous operation within it throws an error that's not properly handled, leading to a crash or unexpected behavior.

## Bug Description
The `asyncOperation` function simulates an asynchronous task that may fail.  If it fails, the rejection is not caught, resulting in an 'unhandled promise rejection' error. This can cause the server to crash or behave unexpectedly.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Observe the 'unhandled promise rejection' error in the console.

## Solution
The solution involves properly handling the rejection using a `.catch` block to gracefully manage errors.