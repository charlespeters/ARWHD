module.exports = function(grunt) {
    // Project configuration.
	require('time-grunt')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // JavaScript Stuff
        uglify: {
            build: {
                src: ['src/js/plugins/*.js', 'src/js/global.js'],
                dest: 'build/js/<%= pkg.name %>.min.js'
            }
        },
        // SASS & CSS stuff
        sass: {
            dist: {
                options: {
                    style: 'compressed',
					sourcemap: 'none',
                },
                files: {
                    'build/css/<%= pkg.name %>.css': 'src/scss/<%= pkg.name %>.scss',
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9', 'safari 6']
            },
            single_file: {
                src: 'build/css/<%= pkg.name %>.css',
                dest: 'build/css/<%= pkg.name %>.prefixed.css'
            },
        },
        cssmin: {
            minify: {
                src: 'build/css/<%= pkg.name %>.prefixed.css',
                dest: 'build/css/<%= pkg.name %>.min.css',
            }
        },
		shell: {
      		jekyllServe: {
        		command: "jekyll serve"
      		},
      		jekyllBuild: {
        		command: "jekyll build --drafts"
      		}
		},
		connect: {
            server: {
              options: {
                port: 9001,
                base: '_site/',
				open: true,
                livereload: true
              }
            }
        },
        svgmin: {
            options: { // Configuration that will be passed directly to SVGO
                plugins: [{
                    removeViewBox: false
                }],
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/img/', // Src matches are relative to this path.
                    src: ['**/*.svg'], // Actual pattern(s) to match.
                    dest: 'src/img/min', // Destination path prefix.
                    ext: '.min.svg' // Dest filepaths will have this extension.
        		}],
      		},
    	},
        // Watch & Notify
        watch: {
            scripts: {
                files: ['src/js/*.js', 'src/js/plugins/*.js'],
                tasks: ['uglify', 'shell:jekyllBuild'],
                options: {
										spawn: false,
										livereload: 35729
                }
            },
            css: {
                files: ['src/scss/*.scss', 'src/scss/**/*.scss' ],
                tasks: ['sass', 'autoprefixer', 'cssmin', 'shell:jekyllBuild'],
                options: {
										spawn: false,
										livereload: 35729
                }
            },
			jekyll: {
                files: ['*.html', '*md', '_layouts/*.html', '_posts/*.md', '_drafts/*.md', '_includes/*.html'],
                tasks: ['shell:jekyllBuild'],
                options: { livereload: 35729 }
			}
        },
    });

	// Registered tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-remfallback');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-shell');

	// Default task(s).
	grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin']);
	grunt.registerTask('dev', ['uglify', 'sass', 'autoprefixer', 'cssmin', 'shell:jekyllBuild']);
	grunt.registerTask('dev', ['connect', 'watch']);
};
