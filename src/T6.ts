import { Configuration } from "webpack";

let config: Configuration = {
  mode: "development",
  entry: {
    index: "./src/index"
  },
  module: {
    rules: [{ test: "/*.js$", loader: "babel-loader" }]
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false
  }
};
