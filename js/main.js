(function(){
  var configA = {
    context: 'A',
    baseUrl: '/bower_components/',
    paths: {
      'jquery': 'jquery-1.7.1/jquery',
      'underscore': 'underscore-1.4.4/underscore',
      'backbone': 'backbone-1.0.0/backbone'
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
  };
  var configB = {
    context: 'B',
    baseUrl: '/bower_components/',
    paths: {
      'jquery': 'jquery-1.8.3/jquery',
      'underscore': 'underscore-1.4.2/underscore',
      'backbone': 'backbone-0.9.1/backbone'
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
  };

  var requireA = requirejs.config(configA);
  var requireB = requirejs.config(configB);

  var logToResults = function(message){
    results = $('#results').text();
    results = results + '\n' + message;
    $('#results').text(results);
  };
  var logVersions = function($, _, Backbone){
    logToResults('jQuery v.' + $.fn.jquery);
    logToResults('underscore v.' + _.VERSION);
    logToResults('backbone v.' + Backbone.VERSION);
  };

  requireA(['require', 'jquery', 'underscore', 'backbone'], function(require, $, _, Backbone){

    logToResults('Initial versions:');
    logVersions($, _, Backbone);

    require(['jquery'], function($){

      $('#change_to_a').click(function(){
        requireA = requirejs.config(configA);
        requireA(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
          logToResults('Versions on A:');
          logVersions($, _, Backbone);
        });
      });
      $('#change_to_b').click(function(){
        requireB = requirejs.config(configB);
        requireB(['jquery', 'underscore', 'backbone'], function($, _, Backbone){
          logToResults('Versions on B:');
          logVersions($, _, Backbone);
        });
      });

    });

  });

})();
