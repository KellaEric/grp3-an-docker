 ## Apache Server Dockerization
This project provides a Dockerized version of the Apache HTTP Server configured with a reverse proxy to a Node.js application. The configuration is specified in the node-vhost.conf file, which is included in the Docker image. This setup is useful for routing requests from an Apache server to a backend Node.js service running in a different container.

 ## Dockerfile
The Dockerfile is used to create a Docker image based on the official Apache HTTP Server image. It includes the following steps:

<!-- Base Image:  -->
Uses the httpd:latest image as the base.
<!-- Copy Configuration:  -->
Copies a custom virtual host configuration file (node-vhost.conf) to the appropriate directory in the Apache configuration.
<!-- Update Main Configuration: -->
 Appends a line to the main Apache configuration file to include the custom virtual host configuration.
<!-- Run Apache: -->
 Configures Apache to run in the foreground when the container starts.

## node-vhost.conf
The node-vhost.conf file defines a virtual host configuration that sets up a reverse proxy. This configuration listens on port 80 and proxies requests to a backend service running on http://api:8000/.

<!-- Building the Docker Image -->
To build the Docker image, navigate to the directory containing the Dockerfile and node-vhost.conf and run the following command:

 1. docker build -t my-apache-server .

This command builds the Docker image and tags it as my-apache-server.

<!-- Running the Docker Container -->
To run a container based on the newly created image, use the following command:

2. docker run -d -p 80:80 --name my-apache-container my-apache-server

This command runs the container in detached mode (-d), maps port 80 on the host to port 80 on the container (-p 80:80), and names the container my-apache-container.

<!-- Accessing the Server -->
Once the container is running, you can access the Apache server by navigating to http://localhost in your web browser. Requests to this URL will be proxied to the backend service running on http://api:8000/.

<!-- Logs -->
The Apache server logs can be accessed within the running container. The error log is located at /usr/local/apache2/logs/error_log, and the access log is located at /usr/local/apache2/logs/access_log.

To view the logs, you can use the following Docker commands:

1. docker exec -it my-apache-container cat /usr/local/apache2/logs/error_log
2. docker exec -it my-apache-container cat /usr/local/apache2/logs/access_log

<!-- Stopping and Removing the Container -->
To stop the running container, use the following command:

1. docker stop my-apache-container

<!-- To remove the stopped container, use the following command -->

1. docker rm my-apache-container


# Setting Up the Network
To allow communication between the Apache server and the Node.js application, create a Docker network:

1. docker network create my-network
Running the Node.js Application
Assuming you have a Docker image for your Node.js application, run the container and connect it to the network:

2. docker run -d --name node-app --network my-network -p 8000:8000 my-node-app
Replace my-node-app with the name of your Node.js Docker image.

<!-- Building the Apache Docker Image -->
To build the Docker image for Apache, navigate to the directory containing the Dockerfile and node-vhost.conf and run the following command:

3. docker build -t my-apache-server .
This command builds the Docker image and tags it as my-apache-server.

<!-- Running the Apache Container -->
To run a container based on the newly created image and connect it to the network, use the following command:

4. docker run -d -p 80:80 --name my-apache-container --network my-network my-apache-server
This command runs the container in detached mode (-d), maps port 80 on the host to port 80 on the container (-p 80:80), and names the container my-apache-container.


