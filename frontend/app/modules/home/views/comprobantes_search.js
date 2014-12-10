define(function(require){
    'use strict';

    var Marionette = require('marionette');

    return Marionette.ItemView.extend({

      template: require('text!./../templates/comprobantes_search.hbs')

    });

});
