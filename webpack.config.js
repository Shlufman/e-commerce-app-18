const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/ui/components'),
            //'@utils': path.resolve(__dirname, 'src/utils'),
            // Добавьте другие алиасы по вашему усмотрению
        }
    }
};

