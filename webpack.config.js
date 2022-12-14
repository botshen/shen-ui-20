const path = require('path')

module.exports = {
  mode: 'production',
  entry: './lib/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'shenui',
    libraryTarget: 'umd',
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9876,
  },
}
