import path from 'path';
import { merge } from 'webpack-merge';
import config, { __dirname } from './webpack.config.js';

export default merge(config, {
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    externals: {
        'prop-types': {
            amd: 'prop-types',
            commonjs: 'prop-types',
            commonjs2: 'prop-types',
            root: 'PropTypes',
        },
        react: {
            amd: 'react',
            commonjs: 'react',
            commonjs2: 'react',
            root: 'React',
        },
        'react-dom': {
            amd: 'react-dom',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            root: 'ReactDOM',
        },
    },
    mode: 'production',
    output: {
        filename: 'index.js',
        library: 'react-boilerplate',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
    },
});
