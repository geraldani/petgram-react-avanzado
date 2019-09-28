const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const webpack = require('webpack')

module.exports = {
  entry: {
    home: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { // estas opciones tambien se pueden colocar en el archivo de .babelrc
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
  ]
}
