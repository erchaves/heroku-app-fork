import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import webpackConfig from '../webpackConfig';
import _debug from 'debug';

const debug = _debug('app:devServer');

/**
 * @param {Object} opts
 * @param {Number} opts.port
 * @param {Number} opts.proxyPort
 */
function createDevServer(opts) {
  const config = Object.assign({}, webpackConfig);
  const { port, proxyPort } = opts;

  Object.keys(config.entry).forEach(function (x) {
    config.entry[x] = [
      `webpack-dev-server/client?http://localhost:${proxyPort}`,
      'webpack/hot/only-dev-server',
      config.entry[x],
    ];
  });

  config.module.loaders.forEach(function (loader) {
    if (!loader.test.test('.js')) return;
    loader.loaders.unshift('react-hot');
  });

  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  const devServer = new WebpackDevServer(webpack(config), {
    publicPath: '/',
    hot: true,
    proxy: {
      '*': `http://localhost:${proxyPort}`,
    },
  });

  devServer.listen(port, function (err) {
    if (err) throw err;
    debug(`listening at localhost:${port}`);
  });

  return devServer;
}

export default createDevServer;
