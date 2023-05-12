/**
 * he querystring module provides an API for parsing and formatting query strings in a Node.js application. 
 * It offers functions for parsing query strings into objects and formatting objects into query strings.
 */

// Example
const querystring = require('querystring');

const obj = { name: 'John', age: 30 };
const qs = querystring.stringify(obj);
console.log('Formatted Query String:', qs);

const parsed = querystring
