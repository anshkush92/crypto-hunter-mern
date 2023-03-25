# Using the official Node.js image as the base image / envirnoment
FROM node:14-alpine

# Setting the working directory to the /app in the container
WORKDIR /app

# Copying the package.json file to the /app directory in the container
COPY package.json .

# Installing the dependencies
RUN npm install

# Copying the rest of the files to the /app directory in the container
COPY . .

# Exposing the port 3000 to the host machine
EXPOSE 3000

# Running the app
CMD ["npm", "start"]