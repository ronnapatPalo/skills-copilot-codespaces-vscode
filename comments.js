// Create web server
// Create a web server that listens on port 3000.
// When you navigate to http://localhost:3000, the server should respond with a JSON object that represents an array of comments. Each comment should have an id, a username, and a comment property.
// The server should respond with the appropriate status code for a successful GET request.
// If you navigate to any other URL, the server should respond with a 404 status code.

// Create a web server
const http = require('http');

const server = http.createServer((req, res) => {
  // Respond with the appropriate status code for a successful GET request
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Respond with a JSON object that represents an array of comments
    const comments = [
      { id: 1, username: 'Alice', comment: 'Hello!' },
      { id: 2, username: 'Bob', comment: 'Hi!' },
      { id: 3, username: 'Charlie', comment: 'Hey!' },
    ];
    res.end(JSON.stringify(comments));
  } else {
    // Respond with a 404 status code
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

server.listen(3000, () => console.log('Server is running on http://localhost:3000'));