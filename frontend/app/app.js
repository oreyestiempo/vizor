define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var Marionette = require('marionette');

    /**
     * @type {Marionette.Application}
     */
    var app = window.app = new Marionette.Application();

    /**
     * Load our application
     */
    require('autoload/vendors')(app);
    require('autoload/plugins')(app);
    require('autoload/modules')(app);

    app.addRegions({
      'contentApplicationRegion': '#content-application-region',
      'logginRegion':             '#loggin-region',
      'container' : '#container'
    });

    app.navigate = function(route, options){
      options || (options = {});
      Backbone.history.navigate(route, options);
    };


    app.isLogged = function(){
      /*TODO
       * Here we will verify if the user is logged, right now we are just returning true
      */
      return true;
    };

    app.on('start', function (options) {
      if (!Backbone.history.start({ pushState : options.pushState })) {
            
        if( app.isLogged ){
          app.navigate('home', { trigger : true });
        }else{
          /*
          var loggin_view = new LogginView();
          App.logginRegion.show(loggin_view);
          App.navigate("loggin"); //Le decimos a backbone que estamos en el loggin
          */
        }

      }
    });

    return app;
});






