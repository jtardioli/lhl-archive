const name = "Josh";
const net = require('net');
const host = '6.tcp.ngrok.io';
const port = 14457;
const conn = net.createConnection({
  host,
  port
});
conn.setEncoding('utf8'); // interpret data as text
// client.js
conn.on('data', (data) => {
  console.log(data);
});
conn.on('connect', () => {
  conn.write(`${name}: has entered the chat`);
});
process.stdin.on('data', function(message) {
  conn.write(`${name}: ${message}`);
});