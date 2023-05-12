/**
  A web application framework that simplifies building APIs and web applications.
  It provides a robust set of features for routing,
  handling middleware, and managing HTTP requests and responses
 */


const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

