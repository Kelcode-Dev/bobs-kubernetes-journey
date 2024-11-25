# Use a minimal Node.js image
FROM node:22.9.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ../app/package.json ./

RUN npm install

# Copy application files
COPY ../app/ .

# Use a non-root user
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
