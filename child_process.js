/*
The child_process module allows you to create and interact with child processes in Node.js.
It provides functions to spawn new processes, execute commands, and communicate with the child processes through standard input/output.

*/
const { exec } = require('child_process');

exec('ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(stdout);
});
