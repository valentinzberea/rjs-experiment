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
    var logVersions = function(){
        logToResults('jQuery v.' + $.fn.jquery);
        logToResults('underscore v.' + _.VERSION);
        logToResults('backbone v.' + Backbone.VERSION);
    };
    var undefCommonLibraries = function(require){
        require.undef('jquery');
        require.undef('underscore');
        require.undef('backbone');
    }

    requireA(['require', 'backbone'], function(require){

        logToResults('Initial versions:');
        logVersions();

        require(['jquery'], function($){

            $('#change_to_a').click(function(){
                undefCommonLibraries(requireA);
                requireA(['jquery', 'backbone'], function(){
                    logToResults('Versions on A:');
                    logVersions();
                });
            });
            $('#change_to_b').click(function(){
                undefCommonLibraries(requireB);
                requireB(['jquery', 'backbone'], function(){
                    logToResults('Versions on B:');
                    logVersions();
                });
            });

        });

    });

})();
