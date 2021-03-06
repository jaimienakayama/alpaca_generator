const path = require("path");
const DIST_DIR = path.join(__dirname, "client/dist");

module.exports = {
  mode: "development",
  entry: "./client/src/App.jsx",
  output: {
    filename: "bundle.js",
    path: DIST_DIR,
  },
  devtool: "eval-cheap-source-map",
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: "file-loader",
      },
      {
        test: [/\.svg$/],
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
