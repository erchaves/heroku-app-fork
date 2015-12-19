var path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),

  target: 'node',

  entry: './src/server',

  output: {
    path: './',
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
