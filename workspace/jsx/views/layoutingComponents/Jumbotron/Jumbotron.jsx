/** @jsx React.DOM */

define([
	'views/layoutingComponents/Blockquote/Blockquote'
], function(Blockquote) {
	'use strict';

	var Jumbotron = function() {
		var that = {};
		var my = {};

		that.render = function() {
			return (
				<div className="jumbotron">
					{!!this.props.title ?
						<h1>
							{this.props.title}
						</h1> : ''}
					{!!this.props.blockquote ?
						<Blockquote {...this.props.blockquote} /> : ''}
				</div>
			);
		};

		return React.createClass(that);
	};

	return new Jumbotron();
});
