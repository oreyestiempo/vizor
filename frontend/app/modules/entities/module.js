define(function (require) {
  'use strict';

  var ComprobanteModel = require('modules/entities/models/comprobante');
  var ComprobantesCollection = require('modules/entities/collections/comprobantes');
  var FakeData = require('modules/entities/collections/fake_data');

  return function (app) {
    app.module('entities', function () {

      /**
       * This modules logger
       * @type {SimpleLogger|Logger|*}
       */
      this.logger = app.lumberman.getLogger('entities');

      /**
       * Private API to be share via reqres
       */
      var API = {
        getComprobantes: function(){
          /* Follow 3 lines is just to fake data */
          var comprobantes = new ComprobantesCollection( FakeData );
          var defer = $.Deferred();
          defer.resolve(comprobantes);

          /* This is the right code, uncomment when REST API available 
          var comprobantes = new ComprobantesCollection();
          var defer = $.Deferred();
          comprobantes.fetch({
            success: function(data){
              defer.resolve(data);
            },
            error: function(){
              defer.resolve(undefined);
            }
          });
          */

          return defer.promise();
        },
        
        getComprobante: function(comprobante_id){
          var comprobante = new ComprobanteModel({id: comprobante_id});          
          var defer = $.Deferred();

          comprobante.fetch({
            success: function(data){
              defer.resolve(data);
            },
            error: function(){
              defer.resolve(undefined);
            }
          });
        }
      };

      /*
       * Request Response, basically this modules "public api"
       */
      app.reqres.setHandler('comprobantes:entities', function(){
        return API.getComprobantes();
      });

      app.reqres.setHandler('comprobantes:entity', function(id){
        return API.getComprobante(id);
      });

    });

  };

});
