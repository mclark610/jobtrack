const path = require('path');

module.exports = options => {
  return {
    entry: './server.js',
    mode: 'development',
    "target": "node",
    output: {
      filename: 'bundle.js',
    },
    module: {

        exprContextRegExp: /$^/,
        exprContextCritical: false,
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                        }
                    },
                ],
            },
            {
                test: /.css$/,
                include: [
                    path.resolve('public/css/dataTables.foundation.min.css'),
                    path.resolve('public/css/foundation.min.css'),
                    path.resolve('public/css/styles.css'),
                ]
            },
            {
                test: /.css$/,
                loader: 'style-loader'
            },
            {
                test: /.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]__[hash:base64:5]'
                }
            }
        ],
    },
  }
}
