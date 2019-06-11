module.exports = (env, argv) => {
  return {
    devtool: 'source-map',
    entry: {
      './static/main.js': './src/main.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: ['babel-plugin-emotion'],
                presets: ['@babel/preset-react']
              }
            }
          ]
        }
      ]
    },
    node: {
      __dirname: false,
      __filename: false
    },
    output: {
      filename: '[name]',
      path: __dirname + '/bin'
    },
    resolve: {
      extensions: ['.js']
    }
  };
};
