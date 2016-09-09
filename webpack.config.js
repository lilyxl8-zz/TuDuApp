const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './frontend/tuDu.jsx',
  output: {
    path: './app/assets/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css?-url!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../stylesheets/main.css', {
      allChunks: true
    })
  ],
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
