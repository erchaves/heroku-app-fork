import path from 'path';
import webpack from 'webpack';

const srcPath = path.resolve(__dirname, '../src');
const distPath = path.resolve(__dirname, '../www');

const config = {
  context: srcPath,

  entry: {
    client: './www/client',
  },

  output: {
    path: distPath,
    filename: '[name].js',
    chunkFilename: '[name].js',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [srcPath],
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
      include: [srcPath],
    }, {
      test: /\.less$/,
      loaders: ['style-loader', 'css-loader', 'less-loader'],
      include: [srcPath],
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `'${process.env.NODE_ENV}'`,
        'CLIENT': true,
      },
    }),
  ],
};

export default config;
