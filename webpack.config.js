var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var PurifyCSSPlugin = require('purifycss-webpack');
var path = require("path");
var glob = require('glob');
var glob = require('glob-all');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
          {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'srcset-loader',

        },
          {
          loader: 'file-loader',
          options: {
            hash: 'sha512',
            digest: 'hex',
            outputPath: './images/',
            name: '[name].[hash].[ext]',
          },
        },
        {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              quality: 65,
            },
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
            svgo: {
              plugins: [{
                removeViewBox: false,
              }, {
                removeEmptyAttrs: false,
              }],
            },
          },
        }],
      }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            inject: 'body',
            hash: true,
            template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
        }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        }),
        new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, 'src/*.html')),
    })
    ]
}
