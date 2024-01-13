const path = require('path');
const { addWebpackAlias, override } = require('customize-cra');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = override(
    addWebpackAlias({
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        "@api": path.resolve(__dirname, 'src/api'),
        "@types": path.resolve(__dirname, 'src/domain/type'),
    }),
    (config) => {
        if (!config.resolve.plugins) {
            config.resolve.plugins = [];
        }
        config.resolve.plugins.push(new TsconfigPathsPlugin());
        return config;
    }
);
