define(function(require){
  'use strict';

  var Backbone = require('backbone');
  var ComprobanteModel = require('modules/entities/models/comprobante');
  
  var ComprobantesCollection = Backbone.Collection.extend({
    url: 'comprobantes',
    model: ComprobanteModel
  });

  return ComprobantesCollection;
});
