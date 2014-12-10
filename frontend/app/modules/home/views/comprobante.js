define(function(require){

  'use strict';

  var ACTIONS = [
    {name: 'edit', cancan_name: 'edit', icon: 'glyphicon glyphicon-pencil'},
    {name: 'see_details', cancan_name: 'read', icon: 'glyphicon glyphicon-eye-open'},
    {name: 'remove', cancan_name: 'remove', icon: 'glyphicon glyphicon-remove-circle'},
    {name: 'take', cancan_name: 'read', icon: 'glyphicon glyphicon-hand-up'},
    {name: 'release', cancan_name: 'read',  icon: 'glyphicon glyphicon-hand-down'}
  ];

  var Marionette = require('marionette');
  var Handlebars = require('handlebars');
  var ComprobanteOptionTemplate = require('text!./../templates/comprobante_options.hbs'); 


  return Marionette.ItemView.extend({
    tagName: 'div',
    className: 'col-sm-4 col-md-2 device',
    template: require('text!./../templates/comprobante.hbs'),

    events: {
      click: 'highlightName',
      'click td a.js-show': 'showClicked',
      'click td a.js-edit': 'editClicked',
      'click button.js-delete': 'deleteClicked',
      'click i.edit': 'editDevice',
      'click i.see_details': 'showDevice',
      'click i.remove': 'removeDevice',
      'click i.take': 'useDevice',
      'click i.release': 'relaseDevice'
    },

    ui: {
      thumbnails: '.thumbnail',
      statusLabel: 'span.label',
      optionsList: 'ul.options',
    },

    onRender: function(){
      var self = this;
      this.ui.statusLabel.addClass('active');
      this.renderOptions();
      this.ui.thumbnails.find('.wrapper-hint').tooltip();
    },

    renderOptions: function(){
      for(var action in ACTIONS){
        this.ui.optionsList.append( Handlebars.compile( ComprobanteOptionTemplate )( ACTIONS[action] ) );                         
      }
    }

  });

});
