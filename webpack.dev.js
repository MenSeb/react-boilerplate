import path from 'path';
import { merge } from 'webpack-merge';
import config, { __dirname } from './webpack.config.js';

export default merge(config, {
    devServer: {
        static: path.resolve(__dirname, 'demo'),
    },
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, 'demo/index.js'),
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'demo'),
    },
});
