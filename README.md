# Gwan Company Website

A modern, bilingual (PT/EN) website for Gwan Company, built with React and TypeScript.

## Features

- 🌐 Bilingual support (Portuguese/English)
- 🎨 Modern, responsive design
- 🚀 Optimized for production
- 🔄 Automated CI/CD pipeline
- 🐳 Docker support for easy deployment

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Docker Deployment

### Prerequisites
- Docker installed on your system
- Git (for cloning the repository)

### Quick Start with Docker

1. Clone the repository:
```bash
git clone https://github.com/rastamansp/gwan-site.git
cd gwan-site
```

2. Build the Docker image:
```bash
docker build -t gwan-site .
```

3. Run the container:
```bash
docker run -d -p 80:80 --name gwan-site gwan-site
```

4. Access the site:
- Open http://localhost in your browser

### Docker Commands Reference

```bash
# Stop the container
docker stop gwan-site

# Start the container
docker start gwan-site

# View container logs
docker logs gwan-site

# Remove the container
docker rm gwan-site

# Remove the image
docker rmi gwan-site
```

## VPS Deployment

### Prerequisites

1. A VPS with:
   - Docker installed
   - Git installed
   - SSH access configured

2. GitHub repository secrets:
   - `SSH_PRIVATE_KEY`: Your SSH private key for VPS access
   - `VPS_HOST`: Your VPS hostname or IP
   - `VPS_USER`: SSH username for your VPS

### Initial VPS Setup

1. SSH into your VPS
2. Create deployment directory:
   ```bash
   mkdir -p /var/www/gwan-site
   cd /var/www/gwan-site
   ```
3. Clone the repository:
   ```bash
   git clone https://github.com/rastamansp/gwan-site.git .
   ```
4. Make deployment script executable:
   ```bash
   chmod +x deploy.sh
   ```
5. Run initial deployment:
   ```bash
   ./deploy.sh
   ```

### CI/CD Setup

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" > "Actions"
3. Add the following secrets:
   - `SSH_PRIVATE_KEY`: Your SSH private key
   - `VPS_HOST`: Your VPS hostname or IP
   - `VPS_USER`: SSH username for your VPS

The CI/CD pipeline will automatically:
- Deploy on every push to main branch
- Pull latest changes
- Rebuild and restart the container

## Manual Deployment

If you need to deploy manually:

```bash
# SSH into your VPS
ssh user@your-vps

# Navigate to project directory
cd /var/www/gwan-site

# Pull latest changes
git pull origin main

# Run deployment script
./deploy.sh
```

## License

MIT
