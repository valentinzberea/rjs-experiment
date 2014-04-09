(function(){
  require.config({
    baseUrl: '/bower_components/',
    paths: {
      'jquery': 'jquery-1.7.1/jquery',
      'underscore': 'backbone-1.0.0/backbone',
      'backbone': 'underscore-1.4.4/underscore'
    },
    shim: {
      jquery: {
        exports: '$'
      },
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      }
    },
    waitSeconds: 30
  });
  require(['backbone'], function(){
    console.log('jQuery v.' + $.fn.jquery);
    console.log('underscore v.' + _.VERSION);
    console.log('backbone v.' + Backbone.VERSION);
  });
})();
