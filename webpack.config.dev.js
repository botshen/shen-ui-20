const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: 'development',
  entry: {
    entry: './main.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
})
