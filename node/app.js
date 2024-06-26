const http = require("http");
const port = 8000;
const hurray =
  "Congratulations on successfully deploying your Dockerized Node.js application!\n\nYour application is now up and running inside a Docker container,\nensuring a consistent and isolated environment. You can access your app at http://localhost:8000.\n\nWell done on achieving this milestone in your development journey. Happy coding! 🚀";

const test = (req, res) => {
  console.log({ NEW_REQUEST: `${req.socket.remoteAddress} - ${req.url}` });
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(hurray);
};
const server = http.createServer(test);

server.listen(port, () =>
  console.log(`Server running at http://127.0.0.1:${port}/`)
);
