var path = require("path");
var webpack = require("webpack");
var UnminifiedWebpackPlugin = require("unminified-webpack-plugin");
module.exports = {
  entry: "./js/entry.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  plugins: [new UnminifiedWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map"
};
