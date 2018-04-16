
var path = require('path');
var webpack = require('webpack');
var NODE_MODULES_PATH = path.resolve(__dirname, 'node_modules')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/mobx-react-todomvc'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env':{NODE_ENV:JSON.stringify(process.env.NODE_ENV)},
      _CLIENT_:JSON.stringify(true),
      _SERVICER_:JSON.stringify(false)
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: ['babel-loader'],
      // include: path.join(__dirname, 'src')
      exclude:NODE_MODULES_PATH
    }]
  }
} 