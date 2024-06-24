const http= require('http');
const  hostname= '0.0.0.0';
const port =8000;
const  Server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  
  response.end("Congratulations on successfully deploying your Dockerized Node.js application!\n\nYour application is now up and running inside a Docker container,\nensuring a consistent and isolated environment. You can access your app at http://localhost:8000.\n\nWell done on achieving this milestone in your development journey. Happy coding! 🚀");


});
Server.listen(port, hostname,()=>{
 console.log('Server running at http://127.0.0.1:8000/');

console.log("App deplied");
            

})

