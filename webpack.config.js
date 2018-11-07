//node path module declared here
//this module helps us get our file path easier
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


//declaring the entry & output points
//for our javascript files
module.exports = (env) =>  {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');


    return {
    //the file we will write our code in
    entry: ['babel-polyfill', './src/app.js'],
    //the bundle file we are targetting to output our code
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: CSSExtract.extract({
                use:  [
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                    }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            })
        },
        {
            test: /\.(png|jpg|jpeg|svg)$/,
            loader: 'file-loader',
            include: path.join(__dirname, 'src')
        }
    ]},
    plugins: [
        CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    } 
    }
};