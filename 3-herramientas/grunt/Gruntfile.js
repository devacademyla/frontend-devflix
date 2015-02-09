module.exports = function (grunt) {

  grunt.initConfig({
    uglify: {
      dist: {
        src: "app/*.js",
        dest: "app.js"
      }
    },
    watch: {
      files: ["app/*.js"],
      tasks: ["uglify"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
};