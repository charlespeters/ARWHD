var webpack = require('webpack');
var paths = require('./paths');

module.exports = {
  entry: paths.jsI,
  output: {
    filename: 'bundle.js',
    path: './assets/dist/js/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
