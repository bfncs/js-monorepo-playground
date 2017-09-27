const path = require('path');

const sharedModules = path.resolve(__dirname, '../../modules');
console.log({ sharedModules });

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      sharedModules,
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ]
  },
  resolveLoader: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      'node_modules',
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [require.resolve('babel-preset-env')],
            plugins: [require.resolve('babel-plugin-transform-runtime')]
          }
        }
      }
    ]
  }
};
