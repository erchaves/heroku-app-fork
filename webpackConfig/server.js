var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var DIST = path.join(ROOT, '/build');

module.exports = {
  context: ROOT,

  target: 'node',

  devtool: 'source-map',

  entry: './src/server',

  output: {
    path: DIST,
    filename: 'server.js',
    libraryTarget: 'commonjs',
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.jade$/, loader: 'jade' },
    ],
  },

  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  },

  resolve: {
    extensions: ['', '.js'],
  },

  externals: /^[a-z\-0-9]/
};
