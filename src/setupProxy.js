const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/add.php',
    createProxyMiddleware({
      target: 'https://divinennodim.000webhostapp.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/delete.php',
    createProxyMiddleware({
      target: 'https://divinennodim.000webhostapp.com',
      changeOrigin: true,
    })
  );
};