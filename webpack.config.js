const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
// 自动清理，清理dist旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './es6/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: path.resolve(__dirname, 'dist') + '/index.html',
      template: path.resolve(__dirname, 'view') + '/index.html',
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};