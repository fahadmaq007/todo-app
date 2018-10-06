// Karma configuration
// Generated on Wed Sep 13 2017 15:41:07 GMT+0100 (BST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angular-bootstrap-lightbox/dist/angular-bootstrap-lightbox.js',
            'bower_components/angular-cookies/angular-cookies.js',
            'bower_components/blob-polyfill/Blob.js',
            'bower_components/file-saver.js/FileSaver.js',
            'bower_components/angular-file-saver/dist/angular-file-saver.bundle.js',
            'bower_components/angular-local-storage/dist/angular-local-storage.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-ui-grid/ui-grid.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-ui-select/dist/select.js',
            'bower_components/jquery-ui/jquery-ui.js',
            'bower_components/angular-ui-sortable/sortable.js',
            'bower_components/angular-img-http-src/index.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/bootstrap-ui-datetime-picker/dist/datetime-picker.min.js',
            'bower_components/microplugin/src/microplugin.js',
            'bower_components/sifter/sifter.js',
            'bower_components/selectize/dist/js/selectize.js',
            'bower_components/ng-selectize/ng-selectize.js',
            'bower_components/angular-confirm/dist/angular-confirm.min.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // endbower

            'app/scripts/config.js',

            'app/scripts/*.js',
            'app/scripts/common/services/jwt-service.js',
            'app/scripts/common/services/url-service.js',
            'app/scripts/common/constants/entitlement.js',
            'app/scripts/common/services/module-serv.js',
            'app/scripts/user/services/user-serv.js',
            'app/scripts/user/controllers/user-dialog-ctrl.js',

            'app/scripts/roles/controllers/role-ctrl.js',
            'app/scripts/data-import/controllers/data-import-ctrl.js',
            'app/scripts/common/controllers/auth-ctrl.js',
            'app/scripts/common/controllers/menu-ctrl.js',

            'test/spec/**/*.js',

            'app/scripts/common/views/*.html',
            'app/scripts/user/views/*.html'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'app/scripts/**/views/*.html': "ng-html2js"
        },

        ngHtml2JsPreprocessor: {

            stripPrefix: 'app/',

            // Make up a module name to contain your templates.
            // We will use this name in the jasmine test code.
            // For advanced configs, see https://github.com/karma-runner/karma-ng-html2js-preprocessor
            moduleName: 'test-templates',
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity

    })
}
