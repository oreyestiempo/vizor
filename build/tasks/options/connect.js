module.exports = {
    server: {
        options: {
            port: 8080,
            middleware: function (connect) {
                'use strict';

                var modRewrite = require('connect-modrewrite');
                var dir = 'frontend';

                var target = require('grunt').config('target');
                if (target !== 'development') {
                    dir = 'build/dist';
                }

                return [
                    modRewrite([
                        '^[^\\.]*$ /index.html [L]'
                    ]),
                    connect.static(dir),
                    connect.directory(dir)
                ];
            }
        }
    }
};
