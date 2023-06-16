const net = require('net');
const port = 8009;
const server = net.createServer();
server.listen(port, () => {
  console.log('Server listening on port', port);
});
const friends = [];
server.on('connection', (client) => {
  client.setEncoding('utf8'); // interpret data as text
  console.log('New client connected!');
  friends.push(client);
  client.write('Connected to Chat App!');
 
  client.on('data', (data) => {
    for (let person of friends) {
      if (person !== client) {
        person.write(data);
      }
    }
    console.log(data);
  });
});

