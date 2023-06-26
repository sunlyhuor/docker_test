# Use the official Node.js 16.10.0 image as the base
FROM node:16.10.0-alpine3.11

# Install PostgreSQL client library and other dependencies
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install 

# Bundle app source code
COPY . .

# Expose port 3000 for the Express app
EXPOSE 3000

# Start the app with Node.js
CMD [ "node", "index.js" ]
