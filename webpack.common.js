const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, "web/public");
const ROOT_DIR = path.resolve(__dirname);
const APP_DIR = path.resolve(`${ROOT_DIR}/app`);

module.exports = {
  context: path.join(__dirname, APP_DIR),
  entry: `${ROOT_DIR}/index.web.js`,
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        // Standard js/jsx compilation.
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            presets: ["module:metro-react-native-babel-preset"],
          },
        },
      },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: /node_modules\/react-native/,
        use: {
          loader: "babel-loader",
          query: {
            cacheDirectory: true,
            presets: ["module:metro-react-native-babel-preset"],
          },
        },
      },
      {
        // This is needed for webpack to import static images in JavaScript files.
        test: /\.(gif|jpe?g|png|svg|mp3|wav)$/,
        use: {
          loader: "url-loader",
          query: { name: "[name].[ext]" },
        },
      },
      {
        test: /\.json$/,
        use: "json-loader",
      },
      {
        test: /\.css|less$/,
        loader: ExtractTextPlugin.extract({
          use: ["css-loader", "less-loader"],
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    // Maps the 'react-native' import to 'react-native-web'.
    alias: {
      "react-native$": "react-native-web",
    },
    modules: [path.join(__dirname, "node_modules"), path.resolve(APP_DIR)],
    extensions: [".js", ".web.js"],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "bundle.css",
      allChunks: true,
    }),
  ],
};
