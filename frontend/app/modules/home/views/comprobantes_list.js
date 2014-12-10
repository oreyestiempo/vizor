define(function(require){
  'use strict';

  var Marionette = require('marionette');
  var ComprobanteView = require('modules/home/views/comprobante');

  return Marionette.CompositeView.extend({

    tagName:          'div',
    template:         require('text!./../templates/comprobantes_list.hbs'),
    childView:         ComprobanteView,
    childViewContainer:'div'

  });

});
