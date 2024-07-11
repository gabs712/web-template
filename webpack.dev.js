const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const postcssConfig = require('./postcss.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: false,
                ...postcssConfig,
              },
            },
          },
        ],
      },
    ],
  },
})

module.exports = config
