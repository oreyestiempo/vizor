define(function (require) {
    'use strict';

    return function (app) {
        /** Autoload modules */

        require('modules/entities/module')(app);
        require('modules/home/module')(app);
    };

});

