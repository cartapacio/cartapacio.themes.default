/*
 * Generated on 2014-05-14
 * generator-assemble v0.4.11
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist',

    },

    watch: {
      assemble: {
        files: ['<%= config.src %>/{content,data,templates,assets}/{,*/}*.{md,hbs,yml,css}'],
        tasks: ['assemble', 'copy']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.src %>/{,*/}*.html',
          '<%= config.src %>/assets/{,*/}*.css',
          '<%= config.src %>/assets/{,*/}*.js',
          '<%= config.src %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      
          
          //'<%= config.dist %>/{,*/}*.html',
          //'<%= config.dist %>/assets/{,*/}*.css',
          //'<%= config.dist %>/assets/{,*/}*.js',
          //'<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'

        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        //hostname: 'localhost'
        hostname: '0.0.0.0'

      },
      livereload: {
        options: {
          open: true,
          base: [
            '<%= config.dist %>'
          ]
        }
      }
    },

    copy: {
      main:{
        expand : true,
        cwd:'<%= config.src %>/assets/',
        //src: '<%= config.src %> /assets',
        //dest:'<%= config.dist %>  /assets'
        src: '**',
        dest:'<%= config.dist %>/assets/'
      }
    },

    assemble: {
      pages: {
        options: {
          flatten: true,
          assets: '<%= config.dist %>/assets',
          layout: '<%= config.src %>/templates/layouts/default.hbs',
          data: '<%= config.src %>/data/*.{json,yml}',
          partials: '<%= config.src %>/templates/partials/*.hbs'
        },
        files: {
          '<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
        }
      }
    },

    // Before generating any new files,
    // remove any previously-created files.
    clean: ['<%= config.dist %>/**/*.{html,xml}']

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('server', [
    'clean',
    //'copy',
    'assemble',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'assemble'

  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
