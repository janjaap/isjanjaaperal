module.exports = function (grunt) {
    grunt.initConfig({
        appDir: 'app',
        outputDir: 'web',

        clean: {
            js: [
                '<%= outputDir %>/js/script.common.js',
                '<%= outputDir %>/js/script.desktop.js',
                '<%= outputDir %>/js/script.strict.js',
                '<%= outputDir %>/js/script.mobile.js'
            ],
            css: [
                '<%= outputDir %>/css/basis.css',
                '<%= outputDir %>/css/mobile.css',
                '<%= outputDir %>/css/desktop.css'
            ]
        },

        concat: {
            //scripts that cannot be combined with other scripts because of their strict nature
            js_strict: {
                src: [
                    'vendor/bower_components/picturefill/src/picturefill.js',
                ],
                dest: '<%= outputDir %>/js/script.strict.js'
            },
            //small footprint script that is used on mobile and to detect mobile devices
            js_common: {
                src: [
                    'vendor/bower_components/zeptojs/src/zepto.js',
                    'vendor/bower_components/zeptojs/src/detect.js'
                ],
                dest: '<%= outputDir %>/js/script.common.js'
            },
            //mobile specific javascript modules
            js_mobile: {
                src: [
                    'vendor/bower_components/zeptojs/src/fx_methods.js',
                    'vendor/bower_components/zeptojs/src/event.js',
                    'vendor/bower_components/zeptojs/src/fx.js',
                    'app/Resources/js/mobile.js',
                    'app/Resources/js/module_loader.js'
                ],
                dest: '<%= outputDir %>/js/script.mobile.js'
            },
            //desktop uses jquery instead of zepto
            js: {
                src: [
                    'vendor/bower_components/jquery/dist/jquery.js',
                    'app/Resources/js/module_loader.js',
                ],
                dest: '<%= outputDir %>/js/script.desktop.js'
            },
            css_basis: {
                src: [
                    'vendor/bower_components/normalize-css/normalize.css',
                    '<%= outputDir %>/css/basis.css'
                ],
                dest: '<%= outputDir %>/css/basis.css'
            },
            css_mobile: {
                src: [
                    '<%= outputDir %>/css/mobile.css'
                ],
                dest: '<%= outputDir %>/css/mobile.css'
            },
            css_desktop: {
                src: [
                    'vendor/bower_components/zepto-tooltip/themes/base/zepto-tooltip.css',
                    '<%= outputDir %>/css/desktop.css'
                ],
                dest: '<%= outputDir %>/css/desktop.css'
            }
        },

        uglify: {
            dist: {
                files: {
                    '<%= outputDir %>/js/script.mobile.js': ['<%= concat.js_mobile.dest %>'],
                    '<%= outputDir %>/js/script.strict.js': ['<%= concat.js_strict.dest %>'],
                    '<%= outputDir %>/js/script.desktop.js': ['<%= concat.js.dest %>'],
                    '<%= outputDir %>/js/script.common.js': ['<%= concat.js_common.dest %>'],
                    '<%= outputDir %>/js/vendor/bower_components/datetimepicker/jquery.datetimepicker.min.js': ['<%= outputDir %>/js/vendor/bower_components/datetimepicker/jquery.datetimepicker.js'],
                    '<%= outputDir %>/js/app/Resources/js/ckeditor/plugins/simpleuploads/plugin.js': ['<%= outputDir %>/js/app/Resources/js/ckeditor/plugins/simpleuploads/plugin.js']
                }
            }
        },

        copy: {
            css: {
                src: [
                    'vendor/bower_components/select2/select2.css',
                    'vendor/bower_components/datetimepicker/jquery.datetimepicker.css'
                ],
                dest: '<%= outputDir %>/css/'
            },
            img: {
                expand: true,
                flatten:true,
                src: [
                    'vendor/bower_components/select2/**.png',
                    'vendor/bower_components/select2/**.gif'
                ],
                dest: '<%= outputDir %>/css/vendor/bower_components/select2/'
            },
            js: {
                files: [
                    {expand: true, src: ['vendor/bower_components/zepto-tooltip/src/zepto-tooltip.js'], dest: '<%= outputDir %>/js/'},
                    {expand: false, src: ['app/Resources/js/ckeditor/**'],  dest: '<%= outputDir %>/js/'},
                    {expand: true, src: ['vendor/bower_components/select2/select2.min.js'], dest: '<%= outputDir %>/js/'},
                    {expand: true, src: ['vendor/bower_components/datetimepicker/jquery.datetimepicker.js'], dest: '<%= outputDir %>/js/'},
                    {expand: true, src: ['vendor/bower_components/swiper/**/*'], dest: '<%= outputDir %>/js/'}
                ]
            }
        },

        cssmin: {
            combine: {
                files: {
                    '<%= outputDir %>/css/vendor/bower_components/select2/select2.min.css': [
                        '<%= outputDir %>/css/vendor/bower_components/select2/select2.css'
                    ],
                    '<%= outputDir %>/css/vendor/bower_components/datetimepicker/jquery.datetimepicker.min.css': [
                        '<%= outputDir %>/css/vendor/bower_components/datetimepicker/jquery.datetimepicker.css'
                    ],
                    '<%= outputDir %>/css/basis.min.css': [
                        '<%= outputDir %>/css/basis.css'
                    ],
                    '<%= outputDir %>/css/mobile.min.css': [
                        '<%= outputDir %>/css/mobile.css'
                    ],
                    '<%= outputDir %>/css/desktop.min.css': [
                        '<%= outputDir %>/css/desktop.css'
                    ]
                }
            }
        },

        compass: {
            dist: {
                options: {
                    require: ['susy', 'sass-globbing', 'breakpoint'],
                    sassDir: '<%= appDir %>/Resources/sass',
                    cssDir: '<%= outputDir %>/css',
                    environment: 'development',
                    outputStyle: 'expanded',
                    importPath: 'vendor/bower_components'
                }
            }
        },

        watch: {
            options: {
                atBegin: true,
                interrupt: true
            },
            css: {
                files: ['Gruntfile.js', '<%= appDir %>/Resources/**/*.scss', 'vendor/bower_components/**/*.css'],
                tasks: 'css'
            },
            js: {
                files: ['Gruntfile.js', 'vendor/bower_components/**/*.js'],
                tasks: 'js'
            }
        },

        modernizr: {
            dist: {
                "outputFile" : "<%= outputDir %>/js/modernizr.min.js",
                "extra" : {
                    "shiv"           : true,
                    "load"           : true,
                    "cssclasses"     : true,
                    "cssgradients"   : true,
                    "fontface"       : true,
                    "backgroundsize" : true,
                    "flexbox"        : true,
                    "load"           : true,
                    "opacity"        : true,
                    "rgba"           : true,
                    "gradients"      : true,
                    "touch"          : true,
                    "generatedcontent" : true
                },
                "extensibility" : {
                    "addtest"      : false,
                    "prefixed"     : false,
                    "teststyles"   : true,
                    "testprop"     : true,
                    "testallprops" : true,
                    "hasevents"    : false,
                    "prefixes"     : false,
                    "domprefixes"  : false
                },

                // By default, source is uglified before saving
                "uglify" : true,

                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                "parseFiles" : false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks("grunt-modernizr");

    grunt.registerTask('css', []); //
    grunt.registerTask('js', []);
    grunt.registerTask('default', ['css', 'js']);
};
