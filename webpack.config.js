const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: ['/node_modules/'],
        use: ['babel-loader']
      },
      {
        test: /\.(css)$/i,
        exclude: ['/node_modules/'],
        use: [
          // 3. Put everything into main.css and put a style tag into html
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          // 2. Sort the parameters alphabetically
          'postcss-loader'
        ]
      },
      {
        test: /\.(svg|woff(2)?|eot|ttf|otf|ico|gif|png|jpg|jpeg|webmanifest)$/i,
        type: 'asset/resource'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '...']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    historyApiFallback: true,
    hot: true,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.join('./src', 'index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
};
