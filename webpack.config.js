const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@/*': path.resolve(__dirname, 'src/*'),
            '@components': path.resolve(__dirname, 'src/ui/components'),
            //'@utils': path.resolve(__dirname, 'src/utils'),
            // Добавьте другие алиасы по вашему усмотрению
        }
    }
};

