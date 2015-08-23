define([
    'backbone',
    'underscore',
    './router'
], function(Backbone, _, Router) {

    // Put somewhere in your scripting environment
    if (jQuery.when.all===undefined) {
        jQuery.when.all = function(deferreds) {
            var deferred = new jQuery.Deferred();
            $.when.apply(jQuery, deferreds).then(
                function() {
                    deferred.resolve(Array.prototype.slice.call(arguments));
                },
                function() {
                    deferred.fail(Array.prototype.slice.call(arguments));
                });

            return deferred;
        }
    }


    var Component = function(name, options, router) {
        this.promise = $.Deferred();
        this.name = name;
        this.loadedView = false;
        this.router = router;
        this.route = options.route;
        this.depends = options.depends || [];
        this.shown = false;

        if (options.el) {
            this.el = options.el;
        } else {
            this.el = document.createElement("section");
            this.el.id = this.name;
        }
        this.$el = $(this.el);

        if (options.route !== undefined && this.router) {
            this.registerRoute(options.route);
        }

    }

    Component.prototype._loadView = function() {
        var that = this;
        require(["views/"+this.name], function(MyBackboneView) {
            that["view"] = new MyBackboneView({
                name: that.name,
                el: that.$el
            });
            that["view"].name = that.name;
            that.loadedView = true;
            that.promise.resolve();
            that.show();
        });
    }

    Component.prototype.loadView = function() {
        var that = this;
        if (!this.loadedView) {
            var promises = [];
            this.depends.forEach(function(dependency) {
                app.components[dependency].loadView();
                promises.push(app.components[dependency].promise);
            });
            $.when.all(promises).then(_.bind(this._loadView, this));
        } else {
            that.depends.forEach(function(name) {
                app.components[name].show();
            });
            that.show();
        }

        if (this.route !== null) {
            // hide non dependencies
            var showns = _.where(app.components, { shown: true });
            showns.forEach(function(shown) {
                if (shown != that && that.depends.indexOf(shown.name) == -1) {
                    shown.hide();
                }
            });
        }

    }

    Component.prototype.registerRoute = function(route) {
        this.router.route(route, this.name, _.bind(this.loadView, this));
    }

    Component.prototype.show = function() {
        var that = this;
        this.promise.done(function() {
            that.shown = true;
            that.view.show();
        });
    },

    Component.prototype.hide = function() {
        var that = this;
        this.promise.done(function() {
            that.shown = false;
            that.view.hide();
        });
    }

    return Component;

});