const path = require("path");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
