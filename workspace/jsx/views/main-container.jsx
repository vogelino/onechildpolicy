/** @jsx React.DOM */

define(['react'], function(OriginalReact) {
	'use strict';

	window.React = OriginalReact;

	var MainContainer = function() {
		var that = {};

		that.render = function() {
			return (
				<div className="content"></div>
			);
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
