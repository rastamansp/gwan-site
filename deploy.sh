#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Pull latest changes
echo "📥 Pulling latest changes..."
git pull origin main

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building the application..."
npm run build

# Restart PM2 process
echo "🔄 Restarting PM2 process..."
pm2 restart ecosystem.config.js --env production

# Verify deployment
echo "✅ Deployment completed successfully!"
pm2 list

# Optional: Show logs
# pm2 logs gwan-site 