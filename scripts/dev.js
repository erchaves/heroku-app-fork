#!/usr/bin/env node
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('../webpackConfig/app');
var server = require('../build/server').default;
var PORT = parseInt(process.env.PORT, 10) || 3000;

server.listen(null, function (err) {
  var devServer;

  if (err) throw err;

  config.entry.app = [
    'webpack-dev-server/client?http://localhost:' + PORT,
    'webpack/hot/only-dev-server',
    config.entry.app,
  ];

  config.module.loaders.forEach(function (loader) {
    if (!loader.test.test('.js')) return;
    if (loader.loader) loader.loader = 'react-hot!' + loader.loader;
    if (loader.loaders) loader.loaders.unshift('react-hot');
  });

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  devServer = new WebpackDevServer(webpack(config), {
    publicPath: '/static',
    hot: true,
    proxy: {
      '*': 'http://localhost:' + server.address().port,
    },
  });

  devServer.listen(PORT, function (err) {
    if (err) throw err;
    console.log('listening at localhost:' + PORT);
  });
});
