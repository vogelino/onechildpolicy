/** @jsx React.DOM */

define([
	'views/layoutingComponents/Blockquote/Blockquote'
], function(Blockquote) {
	'use strict';

	var Jumbotron = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var inlineStyle = {};
			if (!!this.props.backgroundImage) {
				inlineStyle.backgroundImage = 'url(' +
					this.props.backgroundImage + ')';
			}
			return (
				<div className="jumbotron" style={inlineStyle}>
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
