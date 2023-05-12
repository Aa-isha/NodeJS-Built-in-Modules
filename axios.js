/*
A popular HTTP client library that simplifies making HTTP requests from Node.js.
It supports promises and offers an easy-to-use API for sending HTTP requests,
handling responses, and managing request configurations.
*/

// Example;

const axios = require('axios');

axios.get('https://api.example.com/users')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
