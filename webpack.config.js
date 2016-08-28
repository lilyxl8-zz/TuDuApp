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
				test: /\.styl$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
