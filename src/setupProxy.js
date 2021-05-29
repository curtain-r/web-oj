const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api1', {
      target: 'localhost:4000',
      changerOrigin: true,
      pathRewrite: { '^/api1': '' }
    })
  )
}