define(["backbone","underscore"],function(e,t){return e.Router.extend({initialize:function(){var e=this;t.forEach(this.routes,function(t){var t=t;e[t]||(e[t]=function(i,n,o){app.views[t]?(e.afterViewInit.call(e,t,i,n,o),o&&o()):require(["views/"+t],function(s){app.views[t]=new s({el:document.getElementById(t)}),e.afterViewInit.call(e,t,i,n,o),o&&o()})})})},afterViewInit:function(e,t,i,n){this.setHideAll(),this[e+"Show"]=!0,this.postProcessing(),this[e+"Callback"]&&this[e+"Callback"](t,i,n)},setHideAll:function(){var e=this;t.forEach(this.routes,function(t){e[t+"Show"]=!1})},postProcessing:function(){var e=this;t.forEach(this.routes,function(t){app.views[t]?app.views[t].$el[e[t+"Show"]?"show":"hide"]():document.getElementById(t)&&$(document.getElementById(t))[e[t+"Show"]?"show":"hide"]()})}})});