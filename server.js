// Exercise 2 — A first Node.js server
// Run with: node server.js
// Then open http://localhost:3000 in your browser.

const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
