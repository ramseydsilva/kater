define([
    "backbone",
    "essentials"
],
function (Backbone, essentials) {
    "use strict";

    // using jQuery
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    var authSync,
        isIE = essentials.isIE(),
        csrftoken = getCookie('csrftoken'),
    
        authSync = function(method, model, options) {
            
            if (!options.headers) options.headers = {};
            options.headers["X-CSRFToken"] = csrftoken;
            
            if (method) {
                if (!model) {
                    // This situation arises when this.sync is called to make a fly ajax request to server
                    model = { trigger: function() {} }; // let's fake a model
                    model.toJSON = model.trigger;
                    if (typeof options.contentType != "boolean") options.contentType = 'application/json';
                    if (options.type != "GET") options.data = JSON.stringify(options.data);

                }
            } else {
                // if no method was specified, just forward to $.ajax
                return $.ajax(options);
            }
            
            if (typeof options.cache != "boolean" && isIE) options.cache = false;
            
            return Backbone.sync(method, model, options);
        },
        
        // Setup our collection/models use authSync
        
        Collection = Backbone.Collection.extend({
            sync: authSync
        }),
        
        Model = Backbone.Model.extend({
            sync: authSync
        });

    return {
        sync: authSync,
        Collection: Collection,
        Model: Model
    };
    
});