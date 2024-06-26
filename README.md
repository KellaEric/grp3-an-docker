## Node.js Dockerized Project
This repository contains a Node.js application that has been Dockerized for easy deployment and scalability.

 ## Prerequisites
Make sure you have Docker installed on your local machine. You can download and install Docker from https://www.docker.com/.And make sure you have node install 

## Getting Started
To get a local copy of the project up and running follow these steps:

 ## Clone the repository:
bash
Copy code
git clone git@github.com:KellaEric/grp3-an-docker.git
cd grp3-an-docker

## Build the Docker image:

bash
Copy code
docker build -t app .


## Run the Docker container: 

bash
Copy code
docker run -p 8000:8000 app
This command runs the Docker container in detached mode (-d) and maps port 8000 of the container to port 8000 on your local machine.

Open your web browser and navigate to http://localhost:8000 to see the Node.js application running.

 ## Project Structure 
Dockerfile: Defines how the Docker image is built.
app.js: Entry point of the Node.js application.
package.json: Lists dependencies and defines npm scripts.
Docker Commands

## Build Docker image:

bash
Copy code
docker build -t app .

## Run Docker container: 

bash
Copy code
docker run -p 8000:8000 app

## Stop Docker container:

bash
Copy code
docker stop <container-id>

## Remove Docker container:

bash
Copy code
docker rm <container-id>

# Remove Docker image:

bash
Copy code
docker rmi -app

## Dockerfile Explanation

This project uses a Dockerfile to containerize the application. Below is a detailed explanation of each instruction in the Dockerfile:

## Instructions Breakdown
<!-- FROM node alpine3.19: -->

Description: This line specifies the base image for your Docker image.
Details: node is the official Node.js Docker image, and alpine3.19 is a lightweight Linux distribution optimized for Docker, which helps keep the image size small.

<!-- WORKDIR /app: -->

Description: This sets the working directory inside the Docker container.
Details: All subsequent commands will be run from this directory. If the directory doesn't exist, it will be created.

<!-- *COPY package.json .**: -->

Description: This copies the package.json and package-lock.json files from your local machine to the working directory in the container.
Details: These files contain metadata about your project and the dependencies needed to run it.

<!-- RUN npm install: -->

Description: This runs the npm install command inside the container.
Details: It installs all the dependencies listed in the package.json file.

<!-- COPY . .: -->

Description: This copies all the files from your local machine's current directory to the working directory in the container.
Details: This includes your application code and any other necessary files.

<!-- EXPOSE 8000: -->

Description: This informs Docker that the container listens on the specified network port at runtime.
Details: In this case, port 8000 is used by your application to accept incoming connections.

<!-- CMD ["npm", "start"]: -->

Description: This specifies the command to run when the container starts.
Details: It runs npm start, which typically starts your Node.js application.
