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
		json: '../bower_components/requirejs-plugins/src/json'
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
