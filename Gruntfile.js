module.exports = function(grunt) {

   // Project configuration.
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
         files: ['js/*.js', 'less/*.less'],
         tasks: ['jshint', 'less']
      },
      less: {
         development: {
            options: {
               paths: ["assets/css"]
            },
            files: {
               "css/base.css": "less/base.less",
               "css/home.css": "less/home.less"
            }
         }
      },

      cssmin: {
         combine: {
            files: {
               'app/assets/css/base.min.css': ['css/base.css']
            }
         }
      },
      uglify: {
         options: {
            compress: {
               drop_console: true
            },
            mangle: {
               except: ['jQuery']
            }
         },
         my_target: {
            files: {
               'app/assets/js/main.min.js': ['js/main.js']
            }
         }
      },
      jshint: {
         all: ['js/*.js']
      }

   });


   grunt.registerTask("css", 'css', function(){
      grunt.task.run('cssmin');
   });

   grunt.registerTask("js", 'js', function(){
      grunt.task.run('uglify');
   });

   grunt.registerTask('all',  'all', function(){
      grunt.task.run('css');
      grunt.task.run('js');
   });


   grunt.registerTask('default');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-contrib-less');

};
