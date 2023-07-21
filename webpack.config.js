const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  devtool: "eval-source-map",
  watch: true,
  mode: "development",
  //mode: 'production',

  // The entry point file described above
  entry: {
    bundle: ['./src/js/index.js']
  },

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets/"),
      Generators: path.resolve(__dirname, "src/generators/"),
      Js: path.resolve(__dirname, "src/js/")
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },

    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'azert.io',
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
};