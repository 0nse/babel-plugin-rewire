// Karma configuration
const webpackConfig = require('../../webpack.config.js');

const webpackConfigTest = webpackConfig('test');

process.env.BABEL_ENV = 'karma';

/* global module */
module.exports = function (config) {

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: '..', // repository root

        // frameworks to use
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
            './config/test-main.js',
        ],

        // list of files to exclude
        exclude: [],

        webpack: webpackConfigTest,

        webpackMiddleware: {
            stats: {
                colors: true,
            },
        },

        preprocessors: {
            './config/test-main.js': ['webpack', 'sourcemap'],
        },

        captureConsole: true,

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // report which specs are slower than …
        reportSlowerThan: 1500,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO ||
        // config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        plugins: [
            'karma-webpack',
            'karma-sourcemap-loader',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
        ],
    });
};

