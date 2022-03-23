const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
    watchOptions: {
        poll: true
        },
    devtool:"eval-source-map",
    stats:{errorDetails:true},
    target: "web",
    entry: "./src/index.ts",
    output: {
        filename: "../public/main.js",
        clean: true,
    },
    plugins: [new Dotenv()],
    
    node: {
        __dirname: false,
        __filename: false,
      },
    mode: "development",
    module: {
        rules: [
            {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',"@babel/preset-typescript"],
                    plugins: ['@babel/plugin-transform-runtime',"@babel/proposal-class-properties",
                    "@babel/proposal-object-rest-spread"],    
                }
            }
            }
        ],
    },
    
   resolve:{
        extensions: [".ts", ".tsx", ".js"],
    }
};

