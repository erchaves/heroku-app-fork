var path = require('path');
var webpack = require('webpack');

var config = {
  context: path.resolve(__dirname, '..'),

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
    path: './public',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [path.resolve(__dirname, '../node_modules')]
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.less$/, loader: 'style!css!less' },
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

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'source-map';
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
}

module.exports = config;