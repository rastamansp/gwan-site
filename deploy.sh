#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t gwan-site .

# Stop and remove existing container if it exists
echo "🧹 Cleaning up old container..."
docker stop gwan-site || true
docker rm gwan-site || true

# Run the new container
echo "🚀 Starting new container..."
docker run -d \
  --name gwan-site \
  -p 80:80 \
  --restart unless-stopped \
  gwan-site

echo "✅ Deployment complete!"
echo "🌐 Site should be available at http://localhost" 