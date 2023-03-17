const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/add.php',
    createProxyMiddleware({
      target: 'http://localhost/SCANDIWEB_PHPTEST/add.php',
      changeOrigin: true,
    })
  );
  app.use(
    '/delete.php',
    createProxyMiddleware({
      target: 'http://localhost/SCANDIWEB_PHPTEST/delete.php',
      changeOrigin: true,
    })
  );
};