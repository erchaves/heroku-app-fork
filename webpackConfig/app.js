var path = require('path');
var webpack = require('webpack');

var ROOT = path.resolve(__dirname, '..');
var DIST = path.join(ROOT, 'public');
var NODE_MODULES = path.join(ROOT, 'node_modules');

var config = {
  context: ROOT,

  devtool: 'source-map',

  entry: {
    app: './src/app',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
    ],
  },

  output: {
    path: DIST,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [NODE_MODULES],
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '\'' + process.env.NODE_ENV + '\'',
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
}

module.exports = config;
