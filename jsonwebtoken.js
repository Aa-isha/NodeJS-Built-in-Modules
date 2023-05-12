/*
 * A module for generating and verifying JSON Web Tokens (JWTs) that are commonly used for authentication and authorization. 
 * It provides functions for creating secure tokens, verifying their authenticity, and extracting information from the tokens.
*/

// Example;
const jwt = require('jsonwebtoken');

const payload = { userId: 1234 };
const secretKey = 'mySecretKey';

const token = jwt.sign(payload, secretKey);
console.log('Generated token:', token);

const decoded = jwt.verify(token, secretKey);
console.log('Decoded token:', decoded);
