var
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	jshint = require('gulp-jshint'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	gutil = require('gulp-util');

var reload = browserSync.reload;

var
	bases = {
		app: 'workspace/',
		dist: 'destination/',
		serverRoot: './destination'
	};

var paths = {
		scripts: [
			'scripts/**/{,*/}*.js'
		],
		libsJs: [],
		libsCss: [],
		sass: [],
		fonts: [],
		html: [
			'index.html',
			'404.html',
			'scripts/**/{,*/}*.html'
		],
		images: [
			'images/**/{,*/}*'
		],
		content: [],
		extras: [
			'.htaccess',
			'robot.txt',
			'favicon.ico'
		]
	};

gulp.task('clean', function() {
	'use strict';
	return gulp.src(bases.dist)
		.pipe(clean());
});

gulp.task('scripts', function() {
	'use strict';
	gulp.src(paths.scripts, {cwd: bases.app})
		.pipe(jshint())
		.on('error', gutil.log)
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest(bases.dist + 'scripts/'));
});

gulp.task('imagemin', function() {
	'use strict';
	gulp.src(paths.images, {cwd: bases.app})
		.pipe(imagemin())
		.on('error', gutil.log)
		.pipe(gulp.dest(bases.dist + 'content/images/'));
});

gulp.task('styles', function() {
	'use strict';
	gulp.src(paths.libsCss, {cwd: bases.app})
		.pipe(concat('libraries.css'))
		.pipe(gulp.dest(bases.dist + 'styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('sass', function() {
	'use strict';
	gulp.src(paths.sass, {cwd: bases.app})
		.pipe(sass())
		.on('error', gutil.log)
		.pipe(concat('style.css'))
		.pipe(gulp.dest(bases.dist + 'styles/'))
		.pipe(reload({stream: true}));
});

gulp.task('fonts', function() {
	'use strict';
	gulp.src(paths.fonts, {cwd: bases.app})
		.pipe(gulp.dest(bases.dist + 'fonts/'));
});

gulp.task('copyHtml', function() {
	'use strict';
	// Copy html, maintaining the original directory structure
	gulp.src(paths.html, {cwd: bases.app + '**'})
		.pipe(gulp.dest(bases.dist));
});

gulp.task('copyJsLibs', function() {
	'use strict';
	// Copy lib scripts, maintaining the original directory structure
	gulp.src(paths.libsJs, {cwd: bases.app + '**'})
		.pipe(gulp.dest(bases.dist));
});

gulp.task('copyContents', function() {
	'use strict';
	// Copy contents, maintaining the original directory structure
	gulp.src(paths.content, {cwd: bases.app + '**'})
		.pipe(gulp.dest(bases.dist));
});

gulp.task('copyExtras', function() {
	'use strict';
	// Copy extra html5bp files
	gulp.src(paths.extras, {cwd: bases.app})
		.pipe(gulp.dest(bases.dist));
});

gulp.task('copy', function() {
	'use strict';
	gulp.start('copyHtml', 'copyJsLibs', 'copyContents', 'copyExtras');
});

gulp.task('watch', ['build'], function() {
	'use strict';
	browserSync({
		server: {
			baseDir: bases.serverRoot
		},
		injectChanges: true
	});

	gulp.watch(bases.app + 'scripts/**/{,*/}*.js', 				['scripts', reload]);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*.js', 	['copyJsLibs', reload]);
	gulp.watch(bases.app + 'fonts/**/{,*/}*', 					['fonts', reload]);
	gulp.watch(bases.app + 'scripts/**/{,*/}*.html', 			['copyHtml', reload]);
	gulp.watch(bases.app + 'index.html',			 			['copyHtml', reload]);
	gulp.watch(bases.app + '404.html',				 			['copyHtml', reload]);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*', 		['copyJsLibs', reload]);
	gulp.watch(bases.app + 'content/json/**/{,*/}*', 			['copyContents', reload]);
	gulp.watch(bases.app + '.htaccess', 						['copyExtras', reload]);
	gulp.watch(bases.app + 'robot.txt', 						['copyExtras', reload]);
	gulp.watch(bases.app + 'favicon.ico', 						['copyExtras', reload]);
	gulp.watch(bases.app + 'images/**/{,*/}*',		 			['imagemin', reload]);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*.css', 	['styles']);
	gulp.watch(bases.app + 'styles/scss/{,*/}*.scss', 			['sass']);
});

gulp.task('build', ['clean'], function() {
	'use strict';
	gulp.start(
		'scripts',
		'imagemin',
		'styles',
		'fonts',
		'sass',
		'copy'
	);
});

gulp.task('default', ['clean'], function() {
	'use strict';
	gulp.start('build', 'watch'
	);
});
