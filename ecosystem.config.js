module.exports = {
    apps: [
      {
        name: 'website-2024',
        port: '3000',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
      }
    ]
  }