# Base on official Node.js Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install PM2 globally
RUN npm install --global pm2

# Copy package.json and package-lock.json before other files
# Utilize Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all files
COPY . .

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run container as non-root (unprivileged) user
# The node:alpine image creates a "node" user
USER node

# Run npm start script with PM2 runtime
CMD [ "pm2-runtime", "npm", "--", "start" ] 