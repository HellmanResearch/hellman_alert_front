const { createProxyMiddleware } = require('http-proxy-middleware')
console.log('PROXY: ', process.env.PROXY_ENV)

module.exports = function (app) {
  if (process.env.PROXY_ENV === 'proxy') {
    app.use(
      createProxyMiddleware('/api', {
        target: 'http://192.168.1.128:82', 
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      })
    )
  }
}