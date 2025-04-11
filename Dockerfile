# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Use a lightweight Node.js image to serve the application
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Install serve package globally to serve the build directory
RUN npm install -g serve

# Copy the build files from the previous stage
COPY --from=build /app/build /app/build

# Expose port 3000
EXPOSE 3000

# Command to serve the application
CMD ["serve", "-s", "build"]


#By Thanuja Priyadarshane