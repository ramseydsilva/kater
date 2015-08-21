{
    appDir: '../app',
    baseUrl: "../app",
    dir: '../build',

    skipDirOptimize: false,
    skipModuleInsertion: false,
    mainConfigFile: "../app/config.js",
    findNestedDependencies: true,
    optimize: "uglify2",

    bundles: {
        'rentsomefolks': ['./controller']
    },

    cssPrefix: "../static/lib",
    
    modules: [
        {
            name: "rentsomefolks",
            include: ["./views/category", "./views/folks", "./views/home", "./views/job-list-item", "./views/job",
                            "./views/jobPost", "./views/jobReview", "./views/jobs", "./views/join", "./views/login",
                            "./views/map", "./views/profile", "./views/skill", "./views/user"],
            exclude: ["css!font-awesome-css", "css!fontello-css", "css!jqueryUICSS", "timepicker"]
        }
    ]
    
}
