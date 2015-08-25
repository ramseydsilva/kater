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
        'kater': ['./controller']
    },

    cssPrefix: "../static/lib",
    
    modules: [
        {
            name: "kater",
            include: ["./views/about-us", "./views/banner", "./views/cart", "./views/caterer-list-item", "./views/caterer",
                            "./views/caterers", "./views/checkout-item", "./views/checkout", "./views/contact-us", "./views/find-caterers",
                            "./views/full-banner", "./views/home", "./views/item-category", "./views/item", "./views/login",
                            "./views/logout", "./views/main-cart-item", "./views/my-cart", "./views/place-order", "./views/privacy-policy",
                             "./views/profile", "./views/review", "./views/terms-and-conditions", "./views/user-nav"],
            exclude: ["css!font-awesome-css", "css!jqueryUICSS", "css!fontello-css", "timepicker"]
        }
    ]
    
}
