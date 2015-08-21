define([
    "backbone",
    "underscore"
], function (Backbone, _) {

    return Backbone.Router.extend({

        initialize: function() {
            var that = this;
            _.forEach(this.routes, function(name, route) {
                var name = name;
                if (!that[name]) {
                    that[name] = function(a, b, callback) {
                        if (!app.views[name]) {
                            require(["views/"+name], function(View) {
                                app.views[name] = new View({
                                    el: document.getElementById(name),
                                });
                                that.afterViewInit.call(that, name, a, b, callback);
                                if (callback) callback();
                            });
                        } else {
                            that.afterViewInit.call(that, name, a, b, callback);
                            if (callback) callback();
                        }
                    }
                }
            });
        },

        afterViewInit: function(name, a, b, callback) {
            this.setHideAll();
            this[name+"Show"] = true;
            this.postProcessing();
            if (this[name+"Callback"]) this[name+"Callback"](a, b, callback);
        },

        setHideAll: function() {
            var that = this;
            _.forEach(this.routes, function(name, route) {
                that[name+"Show"] = false;
            });
        },

        postProcessing: function() {
            var that = this;
            _.forEach(this.routes, function(name, route) {
                if (app.views[name]) {
                    app.views[name].$el[ that[name+"Show"] ? "show" : "hide" ]();
                } else if (document.getElementById(name)) {
                    $(document.getElementById(name))[ that[name+"Show"] ? "show" : "hide" ]();
                }
            });
        }

    });
});