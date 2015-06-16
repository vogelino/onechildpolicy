var
	gulp = require('gulp'),
	clean = require('gulp-clean'),
	jshint = require('gulp-jshint'),
	jsxcs = require('gulp-jsxcs'),
	concat = require('gulp-concat'),
	imagemin = require('gulp-imagemin'),
	stylus = require('gulp-stylus'),
	normalize = require('stylus-normalize'),
	nib	= require('nib'),
	browserSync = require('browser-sync'),
	react = require('gulp-react'),
	gutils = require('gulp-util');

var bases = {
		app: 'workspace/',
		dist: 'destination/',
		serverRoot: './destination'
	};

var
	reload = browserSync.reload,
	syncConfig = {
		server: {
			baseDir: bases.serverRoot
		},
		injectChanges: true,
		open: false
	};

var paths = {
		scripts: 	[
						'scripts/**/{,*/}*.js'
					],
		jsx: 		['jsx/**/{,*/}*.jsx'],
		stylus: 	['stylus/main.styl'],
		libsJs: 	[
			'bower_components/requirejs/require.js',
			'bower_components/jquery/dist/jquery.js',
			'bower_components/react/react.js',
			'bower_components/underscore/underscore.js',
			'bower_components/backbone/backbone.js',
			'bower_components/requirejs-text/text.js',
			'bower_components/requirejs-plugins/src/json.js',
			'bower_components/c3/c3.js',
			'bower_components/d3/d3.js'
		],
		libsCss: 	[
			'bower_components/c3/c3.css'
		],
		fonts: 		[],
		html: 		[
						'index.html',
						'404.html',
						'scripts/**/{,*/}*.html'
					],
		images: 	[
						'images/**/{,*/}*'
					],
		content: 	[
			'data/**/{,*/}*.csv',
			'data/**/{,*/}*.json'
		],
		extras: 	[
						'.htaccess',
						'robot.txt',
						'favicon.ico'
					]
	};

function throwError(err) {
	'use strict';
	gutils.log(gutils.colors.red(err));
}

function warn(msg) {
	'use strict';
	gutils.log(gutils.colors.yellow(msg));
}

gulp.task('clean', function() {
	'use strict';
	return gulp.src(bases.dist)
		.pipe(clean());
});

gulp.task('scripts', function() {
	'use strict';
	if (!paths.scripts.length) {
		warn('Js files skiped because of empty paths');
		return;
	}
	gulp.src(paths.scripts, {cwd: bases.app})
		.pipe(jshint())
		.on('error', throwError)
		.pipe(jshint.reporter('default'))
		.pipe(gulp.dest(bases.dist + 'scripts/'));
});

gulp.task('react', function () {
	'use strict';
	gulp.src(paths.jsx, {cwd: bases.app})
	.pipe(jsxcs())
	.on('error', throwError)
	.pipe(react())
	.on('error', throwError)
	.pipe(gulp.dest(bases.dist + 'scripts/'))
	.pipe(reload({stream: true}));
});

gulp.task('imagemin', function() {
	'use strict';
	gulp.src(paths.images, {cwd: bases.app})
		.pipe(imagemin())
		.on('error', throwError)
		.pipe(gulp.dest(bases.dist + 'content/images/'));
});

gulp.task('styles', function() {
	'use strict';
	if (!paths.libsCss.length) {
		warn('Css files skiped because of empty paths');
		return;
	}
	gulp.src(paths.libsCss, {cwd: bases.app})
		.pipe(concat('libraries.css'))
		.pipe(gulp.dest(bases.dist + 'css/'))
		.pipe(reload({stream: true}));
});

gulp.task('stylus', function () {
	'use strict';
	gulp.src(paths.stylus, {cwd: bases.app})
	.pipe(stylus({use: [nib(), normalize()]}))
	.pipe(gulp.dest(bases.dist + 'css/'))
	.pipe(reload({stream: true}))
	.on('error', throwError);
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
	if (!paths.libsJs.length) {
		warn('Js libs files skiped because of empty paths');
		return;
	}
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
	gulp.start('copyHtml', 'copyJsLibs', 'copyContents', 'copyExtras')
	.on('error', throwError);
});

gulp.task('watch', ['build'], function() {
	'use strict';
	gulp.watch(bases.app + 'scripts/**/{,*/}*.js', 				['scripts']);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*.js', 	['copyJsLibs']);
	gulp.watch(bases.app + 'fonts/**/{,*/}*', 					['fonts']);
	gulp.watch(bases.app + 'scripts/**/{,*/}*.html', 			['copyHtml']);
	gulp.watch(bases.app + 'index.html',			 			['copyHtml']);
	gulp.watch(bases.app + '404.html',				 			['copyHtml']);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*', 		['copyJsLibs']);
	gulp.watch(bases.app + 'content/json/**/{,*/}*', 			['copyContents']);
	gulp.watch(bases.app + '.htaccess', 						['copyExtras']);
	gulp.watch(bases.app + 'robot.txt', 						['copyExtras']);
	gulp.watch(bases.app + 'favicon.ico', 						['copyExtras']);
	gulp.watch(bases.app + 'images/**/{,*/}*',		 			['imagemin']);
	gulp.watch(bases.app + 'bower_components/**/{,*/}*.css', 	['styles']);
	gulp.watch(bases.app + 'stylus/**/{,*/}*.styl',			 	['stylus']);
	gulp.watch(bases.app + 'jsx/**/{,*/}*',						['react']);
});

gulp.task('browser-sync', ['watch'], function() {
	'use strict';
	browserSync([
		bases.dist + 'css/*',
		bases.dist + 'scripts/*',
		bases.dist + 'resources/*'
	], syncConfig);
});

gulp.task('build', ['clean'], function() {
	'use strict';
	gulp.start(
		'scripts',
		'react',
		'imagemin',
		'styles',
		'fonts',
		'stylus',
		'copy'
	);
});

gulp.task('default', ['clean'], function() {
	'use strict';
	gulp.start('build', 'browser-sync'
	);
});
