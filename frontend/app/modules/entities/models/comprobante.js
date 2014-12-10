define(function(require){
  'use strict';

  var Backbone = require('backbone');
  var ComprobanteModel = Backbone.Model.extend({
    defaults: {
      emisor:        null,
      receptor:      null,
      fecha_emision: null,
      folio:         null,
      sello:         null
    }
  });

  return ComprobanteModel;
});
