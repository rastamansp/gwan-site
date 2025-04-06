#!/bin/bash

# Exit on error
set -e

# Configuration
APP_NAME="gwan-site"
DOCKER_IMAGE="gwan-site"
PORT=80
BACKUP_DIR="/var/backups/${APP_NAME}"
LOG_FILE="/var/log/${APP_NAME}/deploy.log"

# Create necessary directories
mkdir -p "${BACKUP_DIR}"
mkdir -p "/var/log/${APP_NAME}"

# Logging function
log() {
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $1" | tee -a "${LOG_FILE}"
}

# Error handling function
handle_error() {
    log "❌ Error: $1"
    exit 1
}

# Backup function
backup_container() {
    log "📦 Creating backup..."
    if docker ps -a | grep -q "${APP_NAME}"; then
        docker commit "${APP_NAME}" "${DOCKER_IMAGE}:backup-$(date +%Y%m%d%H%M%S)" || true
    fi
}

# Health check function
check_health() {
    log "🏥 Performing health check..."
    sleep 10
    if curl -s http://localhost:${PORT} > /dev/null; then
        log "✅ Health check passed"
        return 0
    else
        log "❌ Health check failed"
        return 1
    fi
}

# Main deployment process
log "🚀 Starting deployment process for ${APP_NAME}..."

# Pull latest changes
log "📥 Pulling latest changes..."
git pull || handle_error "Failed to pull latest changes"

# Build the Docker image
log "🏗️ Building Docker image..."
docker build -t "${DOCKER_IMAGE}" . || handle_error "Failed to build Docker image"

# Backup existing container
backup_container

# Stop and remove existing container if it exists
log "🧹 Cleaning up old container..."
docker stop "${APP_NAME}" || true
docker rm "${APP_NAME}" || true

# Run the new container
log "🚀 Starting new container..."
docker run -d \
    --name "${APP_NAME}" \
    -p "${PORT}:80" \
    --restart unless-stopped \
    "${DOCKER_IMAGE}" || handle_error "Failed to start container"

# Perform health check
if check_health; then
    log "✅ Deployment successful!"
    log "🌐 Site is available at http://localhost:${PORT}"
else
    log "⚠️ Deployment completed, but health check failed"
    log "🔍 Please check the container logs: docker logs ${APP_NAME}"
fi

# Cleanup old backups (keep last 5)
log "🧹 Cleaning up old backups..."
docker images "${DOCKER_IMAGE}:backup-*" | sort -r | awk 'NR>5 {print $3}' | xargs -r docker rmi || true

log "✨ Deployment process completed" 