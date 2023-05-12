/*
 dns module enables performing DNS (Domain Name System) lookups and hostname resolution.
 It allows you to resolve domain names to IP addresses and vice versa,
 retrieve information about DNS records, and perform other DNS-related operations.
 */



const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
  console.log('Address:', address);
});
