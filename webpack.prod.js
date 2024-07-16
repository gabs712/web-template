const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const postcssConfig = require('./postcss.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

const config = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: ['...', new HtmlMinimizerPlugin()],
  },
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

                plugins: {
                  ...postcssConfig.plugins,
                  cssnano: {},
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
})

module.exports = config
