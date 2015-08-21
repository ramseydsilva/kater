define(["core/router"],function(e){var o={home:"Home",jobs:"Jobs",jobPost:"Post a new Job",jobReview:"Review Job",folks:"Folks",login:"Login",join:"Join",logout:null,profile:"My Profile"},i=hideBack=hideMap=showHomeButtons=!1,t=function(){i=hideMap=hideBack=showHomeButtons=!1},a=$("#job"),n=$("#main-back"),l=$("#map"),s=$("body"),p=function(){showHomeButtons?app.views.home.showHomeButtons():app.views.home.hideHomeButtons(),hideMap?app.promises.mapLoaded.done(function(){l.addClass("hideMap")}):l.removeClass("hideMap"),hideBack?n.hide():n.show()};return e.extend({routes:{"":"home","login/":"login","profile/":"profile","logout/":"logout","join/":"join","jobs/":"jobs","jobs/new/":"jobPost","jobs/new/review/":"jobReview","jobs/:id/":"job","folks/":"folks"},pageNotFoundView:function(e){app.changeTitle(e||"404 Page Not Found")},homeCallback:function(){hideBack=!0,showHomeButtons=!0,p(),app.views.home.selectSingleCategory=i},jobReviewCallback:function(e){hideFilters=!0,p(),e&&e()},loginCallback:function(e){hideMap=!0,p(),e&&e()},profileCallback:function(e){hideMap=!0,p(),e&&e()},joinCallback:function(e){hideMap=!0,p(),e&&e()},folksCallback:function(e){hideMap=!0,p(),e&&e()},jobsCallback:function(e){hideMap=!0,p(),e&&e()},jobCallback:function(e){app.changeTitle("Job"),app.changePageTitle(e.attributes.title),app.promises.mapLoaded.done(function(){setMap({lat:e.attributes.latitude,lng:e.attributes.longitude})}),p()},jobPostCallback:function(e){if(app.views.home.$el.show(),i=!0,p(),app.views.home){var o=app.collections.category.where({selected:!0});o.length>1&&(selectCategory=o[0],app.views.home.unselectAllCategories(selectCategory))}e&&e()},job:function(e,o){var i=this;if(o||(o=app.collections.job.findWhere({id:parseInt(e)})),o)o.view?(a.html(o.view.html),i.afterViewInit.call(i,"job",o)):require(["views/job"],function(e){o.view=new e({el:document.getElementById("job"),model:o}),i.afterViewInit.call(i,"job",o)});else{var i=this;o=app.collections.job.add({id:e}),o.fetch({error:function(e,o){app.collections.job.remove(e),this.pageNotFoundView(o.status+" "+o.statusText)},success:function(o){i.job(e,o)}})}},logout:function(){app.user.fetch({url:"/api/logout/"})},execute:function(e,i,a){var n=this;return app.changeTitle(o[a]),e||(e=n[a]),window.scrollTo(0,0),s.show(),"jobReview"!=a||app.views.jobPost?void(app.views.map?(t(),e&&e.apply(n,i)):require(["views/map"],function(o){app.views.map=new o({el:document.getElementById("map")}),"home"==a||app.views.home?(t(),e&&e.apply(n,i)):n.home(null,null,function(){t(),e&&e.apply(n,i)})})):this.navigate("/jobs/new/",!0)}})});