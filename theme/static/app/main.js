define([
    "./config"    
], function(config) {

    window.env = require.toUrl('.').indexOf('build') > 0 ? "prod" : "dev";

    require(['kater']);
    
});