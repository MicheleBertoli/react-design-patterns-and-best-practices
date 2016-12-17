const nodeExternals = require('webpack-node-externals')

const loaders = [{
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel',
  query: {
    presets: ['es2015', 'react'],
  },
}]

const client = {
  entry: './src/client.js',

  output: {
    path: './dist/public',
    filename: 'bundle.js',
  },

  module: { loaders },
}

const server = {
  entry: './src/server.js',

  output: {
    path: './dist',
    filename: 'server.js',
  },

  module: { loaders },

  target: 'node',

  externals: [nodeExternals()],
}

module.exports = [client, server]
