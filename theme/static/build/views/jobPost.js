define(["backbone","underscore","text!templates/jobPost.html","../models/job","jqueryUI","css!jqueryUICSS","timepicker"],function(t,e,i,a){return t.View.extend({template:e.template(i),job:new a,events:{"click #post-submit":"postReview"},initialize:function(t){this.categoryCollection=t.categoryCollection,this.skillCollection=t.skillCollection,this.render()},validate:function(t){return t.category?t.skills.length?t.title?t.description?t.start_date?t.end_date?t.start_time?t.end_time?t.hourly_rate?void 0:"Enter an hourly rate":"Enter a end time":"Enter a start time":"Enter a end date":"Enter a start date":"Enter a job description":"Enter a job title":"Select atleast one skill":"Select a category"},postReview:function(t){var e="",i=[],a=app.collections.category.findWhere({selected:!0});a&&(e=a.id),app.collections.skill.where({selected:!0}).each(function(t){i.push(t.id)});var r={title:this.jobTitle.val(),description:this.$("#jobDescription").val(),start_date:this.$("#startDate").val(),start_time:this.$("#startTime").val(),end_date:this.$("#endDate").val(),end_time:this.$("#endTime").val(),hourly_rate:this.$("#hourlyRate").val(),currency:this.$("#currency").val(),number:this.$("#number").val(),latitude:app.map&&app.map.getCenter().G,longitude:app.map&&app.map.getCenter().K,category:e,skills:i,city:$("#city").val(),address:$("#address").val()},s=this.validate(r);s?(t.preventDefault(),t.stopImmediatePropagation(),this.error.removeClass("hidden")):(r.start_date=new Date(r.start_date+" "+r.start_time),r.end_date=new Date(r.end_date+" "+r.end_time),delete r.start_time,delete r.end_time,this.job.set(r),this.error.addClass("hidden")),this.error.text(s)},initializeTimePicker:function(){ng.browser.loaded=!0,ng.ready(function(){new ng.TimePicker({input:"startTime",placement:"tlbl"}),new ng.TimePicker({input:"endTime",placement:"tlbl"})})},render:function(){var t=this;this.html=$(this.template({})),this.$el.html(this.html),this.jobTitle=this.$("#jobTitle"),this.jobDescription=this.$("#jobDescription"),this.startDate=this.$("#startDate"),this.startTime=this.$("#startTime"),this.endDate=this.$("#endDate"),this.endTime=this.$("#endTime"),this.hourlyRate=this.$("#hourlyRate"),this.currency=this.$("#currency"),this.numberPeople=this.$("#numberPeople"),this.startDate.datepicker(),this.endDate.datepicker(),this.error=this.$("#jobPostError"),t.initializeTimePicker()}})});