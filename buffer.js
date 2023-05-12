/*
The buffer module enables working with binary data as a raw buffer of memory.
It provides a way to create, manipulate, and tranform binary data, such as strings, numbers, or arrays of bytes. 
*/
const buffer = Buffer.from('Hello Aisha', 'utf8');
console.log(buffer.toString()); // Output: Hello Aisha
