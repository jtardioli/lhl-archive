const net = require('net');
const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000 // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

// client.js
conn.on('data', (data) => {
  console.log('data');
 
});

conn.on('connect', () => {
  conn.write('Hello from client!');
});