module.exports = function (grunt) {

    'use strict';

    var pkg = require("./package.json");

    // Initializes the Grunt tasks with the following settings
    grunt.initConfig({
        pkg: pkg,
        'curl-dir': {
          'font' : [
            'http://img.dafont.com/dl/?f=woodstamp'
          ]
        },
        unzip: {
            font: 'font/?f=woodstamp'
        },
        clean: [
            'font/?f=woodstamp',
            'font/Readme.txt'
        ]
    });

    // Load the plugins that provide the tasks we specified in package.json.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-curl');
    grunt.loadNpmTasks('grunt-zip');


    //get font
    grunt.registerTask('default', ['curl-dir', 'unzip', 'clean']);

};
