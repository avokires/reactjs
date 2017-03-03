 var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: [
         'webpack-hot-middleware/client?reload=true',
         path.join(__dirname, 'src/index.jsx')
     ],

     output: {
         filename: 'bundle.js',
         //  path: './public',
         path: path.join(__dirname, '/public/'),

         publicPath: '/'
     },

     devServer: {
         inline: true,
         contentBase: './public',
         port: 8000
     },

     module: {
         loaders: [{
                 test: /\.jsx?$/,
                 exclude: /node_modules/,
                 loaders: ['react-hot', 'babel-loader']
             },
             {
                 test: /\.sass$/,
                 loader: 'style-loader!css-loader!sass-loader'
             }
         ]
     },

     plugins: [
         new webpack.HotModuleReplacementPlugin(),
     ],

     devtool: 'eval-source-map',

     resolve: {
         extensions: ['', '.js', '.jsx']
     }
 };