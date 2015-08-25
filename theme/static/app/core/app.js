define([
    "core/component",
    "core/router",
    "underscore"
], function(Component, Router, _) {

    var App = function(options) {
        var that = this;
        
        this.$el = options.$el
        this.collections = options.collections;
        this.promises = options.promises;
        this.user = options.user;
        this.options = options;
        this.router = new Router();
        this.events = options.events || {};

        this.components = {};
        _.forEach(options.components, function(options, name) {
            that.register(name, options)
        });

    };
    
    App.prototype.load = function(name, options) {
        this.components[name].loadView(this);
    };

    App.prototype.register = function(name, options) {
        if (this.components[name]) {
            return this.components[name];
        } else {
            if (!options) {
                options = this.options[name];
            }
            var component = new Component(name, options, this.router);
            this.components[name] = component;
        }
    };

    return App;

});