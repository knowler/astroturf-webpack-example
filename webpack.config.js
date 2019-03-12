const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => ({
  context: path.resolve(__dirname, 'src'),
  entry: {
    'index': './index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[id].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'astroturf/css-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'astroturf/loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      chunkFilename: 'styles/[id].css',
    }),
  ],
});
