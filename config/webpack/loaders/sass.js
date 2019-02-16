const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const minimize = env.NODE_ENV === 'production';

module.exports = {
  test: /\.s?css$/i,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        fiber: require('fibers'),
        implementation: require('sass'),
        sourceMap: true,
      },
    },
  ],
};

