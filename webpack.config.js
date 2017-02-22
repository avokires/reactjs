 module.exports = {
    entry: './src/index.jsx',

    output: {
            filename: 'bundle.js',
            path: './public',
    },

    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    }, 

    module: {
         loaders: [
             {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel-loader'
             },
             {
                 test: /\.sass$/,
                 loader: 'style-loader!css-loader!sass-loader'
             }
         ]
     },

    devtool: 'eval-source-map',
    
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
 };