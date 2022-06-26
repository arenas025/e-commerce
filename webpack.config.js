const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports={
    entry:'./src/index.js',

    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'main.js',
        publicPath:'/'
    },
    mode: 'production',

    resolve:{
        extensions:['.js','.jsx']
    },
    
    module:{
        rules:[
                {
                loader: 'babel-loader',
                test:/\.js$|jsx/,
                exclude:/node_modules/,
                },
                {
                test:/\.html$/,
                use: [
                    {
                        loader:'html-loader'
                    }
                ]
                },
                {
                    test: /\.s?css$/,
                    use: [MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                }
            ]
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins:[
        new htmlWebpackPlugin({
            inject:'body',
            template: './public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ],
    devServer:{
        static:path.join(__dirname,'dist'),
        compress: true,
        historyApiFallback:true,
        port:3005,
        }
}



