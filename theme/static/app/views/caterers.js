define([
    "core/view",
    "underscore",
    "text!templates/caterers.html",
    "./caterer-list-item"
], function(View, _, template, CategoryListItemView) {

    return View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function() {
            var that = this;
            this.render();
            app.collections.caterer.forEach(function(model) {
                that.addCaterer(model);
            });
            app.collections.caterer.on("add", this.addCaterer, this);
            this.fetchCaterers();
        },

        addCaterer: function(model) {
            if (!model.listView) {
                model.listView = new CategoryListItemView({
                    model: model
                });
                this.caterersList.append(model.listView.$el);
            } else {
                model.listView.show();
            }
        },

        fetchCaterers: function() {
            var date = app.filter.get("date");
            var area = app.filter.get("area");
            var category = app.filter.get("category");
            var price_lower = app.filter.get("price_lower");
            var price_upper = app.filter.get("price_upper");
            var capacity_lower = app.filter.get("capacity_lower");
            var capacity_upper = app.filter.get("capacity_upper");
            var all_female_servers = app.filter.get("all_female_servers");
            var arabic_speaking_only = app.filter.get("arabic_speaking_only");
            this.filters = {
                area: area,
                category: category,
                price_min: price_lower,
                price_max: price_upper,
                capacity_min: capacity_lower,
                capacity_max: capacity_upper
            }
            if (all_female_servers) this.filters['all_female_servers'] = "True";
            if (arabic_speaking_only) this.filters['arabic_speaking_only'] = "True";
            app.collections.caterer.fetch({
                data: this.filters,
                remove: false,
                success: function(collection, response, options) {
                    var response_ids = response.map(function(x) { return x.id; });
                    collection.models.forEach(function(model) {
                        if (response_ids.indexOf(model.id) == -1) {
                            model.listView.hide();
                        } else {
                            model.listView.show();
                        }
                    });
                }
            });
        },

        render: function() {
            this.html = $(this.template({

            }));
            this.$el.html(this.html);
            this.caterersList = this.$("#caterers-list");
        }

    });

});
