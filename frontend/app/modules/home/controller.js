define(function (require) {
  'use strict';

  var Marionette = require('marionette');
  var IndexView = require('./views/index');
  var HeaderView = require('modules/home/views/header');
  var ComprobantesSearchView = require('modules/home/views/comprobantes_search');
  var ComprobantesListCView = require('modules/home/views/comprobantes_list');

  return Marionette.Controller.extend({

    initialize: function (options) {
        this.app = options.app;
        this.logger = options.logger;
    },

    index : function () {
      var self = this;
      var indexView = new IndexView();

      indexView.on('render', function(){
        indexView.headerRegion.show( new HeaderView() );
        indexView.leftMenu.show( new ComprobantesSearchView() );

        var fetchingComprobantes = self.app.request('comprobantes:entities');
        $.when( fetchingComprobantes ).done(function(comprobantes){          
          indexView.mainRegion.show( new ComprobantesListCView({ collection: comprobantes }) );
        });        

      });

      this.app.container.show( indexView );
    }
  });

});
