const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "client/main.js")],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
