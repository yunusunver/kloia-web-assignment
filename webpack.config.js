const path = require('path');
const webpack = require('webpack');

const { spawn } = require('child_process');

// Config directories

const SRC_DIR = path.resolve(__dirname, 'src');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');

module.exports = {
  entry: SRC_DIR+'/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    open: true,
    hot: true,
    stats: {

      colors: true,

      chunks: false,

      children: false

    },

    before() {

      spawn(

        'electron',

        ['./dist/main.js'],

        { shell: true, env: process.env, stdio: 'inherit' }

      )

      .on('close', code => process.exit(0))

      .on('error', spawnError => console.error(spawnError));

    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
