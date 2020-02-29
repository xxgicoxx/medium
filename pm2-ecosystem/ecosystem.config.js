module.exports = {
  apps: [{
    name: 'Gateway',
    script: './gateway/server.js',
    exec_mode: 'cluster',
    instances: 'max'
  }, {
    name: 'Correios',
    script: './service-correios/app.js',
    exec_mode: 'cluster',
    instances: 'max',
  }, {
    name: 'Url',
    script: './service-url/app.js',
    exec_mode: 'cluster',
    instances: 'max',
  }],
};
