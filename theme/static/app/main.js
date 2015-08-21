define([
    "./config"    
], function(config) {

    window.env = require.toUrl('.').indexOf('build') > 0 ? "prod" : "dev";
    if (window.env == "prod") {
        ng_config_defaults = {
            assets_dir: "/static/app/lib/nogray-1.2.2/assets/"
        }
    }

    require(['rentsomefolks']);
    
});