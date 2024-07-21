const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: ['./src/js/main.js', './src/css/main.css'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].bundle.js',
  },
  devServer: {
    static: './dist',
    client: {
      logging: 'none',
    },
    watchFiles: ['./src/index.html'],
  },
  stats: {
    preset: 'minimal',
    loggingDebug: ['sass-loader'],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|jfif|gif|webp|avif|woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'module',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
    }),
  ],
}

module.exports = config
