module.exports = {
    apps: [{
      name: 'gwan-site',
      script: 'npx serve build -l 3000',
      cwd: '/app',
      watch: false
    }]
  }
  