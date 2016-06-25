module.exports = {
  entry: './app/app-client.js',
  output: {
    filename: 'dist/bundle.js'
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
