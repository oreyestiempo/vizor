define(function (require) {
    'use strict';

    var Marionette = require('marionette');

    return Marionette.LayoutView.extend({

        template : require('text!./../templates/index.hbs'),

        regions: {
          headerRegion: '#header-region',
          leftMenu:     '#left-menu',
          mainRegion:   '#main-region',
          modalRegion:  '#modal-region'
        }

    });

});
