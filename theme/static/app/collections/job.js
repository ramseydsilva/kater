define([
    "core/authSync",
    "../models/job"
], function (authSync, JobModel) {
    "use strict";

    return authSync.Collection.extend({
        model: JobModel,
        url: "/api/jobs/"
        
    });

});