import commonConfig from './common';
import webpack from 'webpack';

const config = Object.assign({}, commonConfig);

config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false,
  },
}));

export default config;
