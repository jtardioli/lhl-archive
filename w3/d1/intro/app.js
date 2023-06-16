const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function(request, response) {
  if (request.url === '/') {
    response.end(`Welcomes`);

  } else if (request.url === '/url') {
    response.end(`Requested Path: ${request.url}`);

  } else {
    response.end("404 Page Not Found");
  }
  
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});