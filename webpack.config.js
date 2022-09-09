const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./lib/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/lib"),
    library: "shenui",
    libraryTarget: "umd",
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: "our project",
  //     template: "index.html",
  //   }),
  // ],
  // externals: {
  //   react: {
  //     commonjs: "react",
  //     commonjs2: "react",
  //     amd: "react",
  //     root: "React",
  //   },
  //   "react-dom": {
  //     commonjs: "react-dom",
  //     commonjs2: "react-dom",
  //     amd: "react-dom",
  //     root: "ReactDOM",
  //   },
  // },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
  },
};
