module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		notify: {
			watch: {
				options: {
					title: 'Task Complete', // optional
					message: 'SASS and Uglify finished running & Autoprefixed', //required
				}
			},
			sass: {
    			options: {
        			title: 'SASS Compiled',
        			message: 'Ummm keep working maybe?',
    			}
			}
		},
		uglify: {
			build: {
				src: ['js/libs/*.js', 'js/plugins/*.js', 'js/global.js'],
				dest: 'js/build/global.min.js'
			}
		},
		sass: { // Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: { // Dictionary of files
					'css/arwhd.css': 'scss/arwhd.scss' // 'destination': 'source'
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 8', 'ie 9']
			},
			single_file: {
				src: 'css/arwhd.css',
				dest: 'css/arwhd.prefixed.css'
			},
		},
		cssmin: {
			minify: {
				src: 'css/arwhd.prefixed.css',
				dest: 'css/arwhd.min.css',
			}
		},
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass', 'autoprefixer', 'cssmin'],
				options: {
					livereload: true,
					spawn: false,
				},
			},
			js: {
				files: ['js/libs/*.js', 'js/plugins/*.js', 'js/*.js'],
				tasks: ['uglify'],
				options: {
					livereload: true,
				},
			}
		}
	});
	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-notify');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'sass']);
	grunt.registerTask('notify', ['notify:sass', 'notify:watch', 'notify:sass']);
	grunt.registerTask('dev', ['watch', 'notify:sass']);
};
