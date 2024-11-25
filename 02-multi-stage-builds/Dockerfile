# Stage 1: Build the application
FROM node:22.9.0-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY ../app/package.json ../app/package-lock.json ./
RUN npm ci --production

# Copy application files
COPY ../app/ .

# (Optional) Build assets if the app uses static files, e.g.:
# RUN npm run build

# Stage 2: Production image
FROM node:22.9.0-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy files from the builder stage
COPY --from=builder /usr/src/app .

# Use a non-root user
USER node

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
