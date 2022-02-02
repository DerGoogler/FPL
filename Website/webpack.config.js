const webpack = require("webpack");
const path = require("path");

const config = {
  mode: "development",
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /(d)?\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /(\.css$)/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: "url-loader?limit=100000",
      },
      {
        test: /\.yaml$/,
        use: "js-yaml-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, "lib/node_modules"),
    ],
  },
  resolveLoader: {
    modules: [
      "node_modules",
      path.join(process.env.NPM_CONFIG_PREFIX || __dirname, "lib/node_modules"),
    ],
  },
  devServer: {
    port: 9950,
    static: {
      directory: "./dist",
    },
  },
};

module.exports = config;
