/** @jsx React.DOM */

/*global require*/
require.config({
	baseUrl: './scripts/',
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		react: '../bower_components/react/react',
		underscore: '../bower_components/underscore/underscore',
		text: '../bower_components/requirejs-text/text',
		json: '../bower_components/requirejs-plugins/src/json',
		d3: '../bower_components/d3/d3',
		c3: '../bower_components/c3/c3'
	},
	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		d3: {
			exports: 'd3'
		},
		c3: {
			deps: ['d3'],
			exports: 'c3'
		}
	}
});

require([
	'views/main-container',
	'react',
	'backbone',
	'jquery',
	'underscore'
], function(MainContainer, OriginalReact) {
	window.React = OriginalReact;
	React.render(
		<MainContainer />,
		document.getElementById('main-container')
	);
});
