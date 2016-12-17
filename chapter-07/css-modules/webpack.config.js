const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&localIdentName=[local]--[hash:base64:5]',
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin()],
}
