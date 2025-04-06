module.exports = {
  apps: [
    {
      name: 'gwan-site',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
}; 