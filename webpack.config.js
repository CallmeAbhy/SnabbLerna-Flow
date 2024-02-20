// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./packages/ui-example/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
