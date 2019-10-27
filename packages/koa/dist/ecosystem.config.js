module.exports = {
  apps: [
    {
      name: 'hugsnan koa',
      script: './src/index.js',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: '',
      instances: 1,
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        PORT: 3000,
        NODE_ENV: 'development'
      },
      env_production: {
        PORT: 7700,
        NODE_ENV: 'production'
      }
    }
  ]
};
