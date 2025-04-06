# Gwan Company Website

A modern, bilingual (PT/EN) website for Gwan Company, built with React and TypeScript.

## Features

- 🌐 Bilingual support (Portuguese/English)
- 🎨 Modern, responsive design
- 🚀 Optimized for production
- 🔄 Automated CI/CD pipeline

## Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Deployment

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
