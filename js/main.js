(function(){
    var config = {
        baseUrl: '/bower_components/',
        paths: {
                'jquery': 'jquery-1.7.1/jquery',
                'underscore': 'underscore-1.4.4/underscore',
                'backbone': 'backbone-1.0.0/backbone',
                'jquery-1.8.3': 'jquery-1.8.3/jquery',
                'underscore-1.4.2': 'underscore-1.4.2/underscore',
                'backbone-0.9.1': 'backbone-0.9.1/backbone'
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
            },
            'jquery-1.8.3': {
                exports: '$'
            },
            'underscore-1.4.2': {
                exports: '_'
            },
            'backbone-0.9.1': {
                deps: ['jquery-1.8.3', 'underscore-1.4.2'],
                exports: 'Backbone'
            }
        },
        waitSeconds: 30
    };

    requirejs.config(config);

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
    var undefCommonLibraries = function(){
        require.undef('jquery');
        require.undef('underscore');
        require.undef('backbone');
        require.undef('jquery-1.8.3');
        require.undef('underscore-1.4.2');
        require.undef('backbone-0.9.1');
    }

    require(['require', 'backbone'], function(require){

        logToResults('Initial versions:');
        logVersions();


        $('#change_to_a').click(function(){
            undefCommonLibraries();
            require(['backbone'], function(){
                logToResults('Versions on A:');
                logVersions();
            });
        });
        $('#change_to_b').click(function(){
            undefCommonLibraries();
            require(['jquery-1.8.3', 'underscore-1.4.2', 'backbone-0.9.1'], function(){
                logToResults('Versions on B:');
                logVersions();
            });
        });

    });

})();
