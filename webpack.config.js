module.exports = {
  entry: './app-client.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|app-server.js)/
      }
    ]
  }
}
