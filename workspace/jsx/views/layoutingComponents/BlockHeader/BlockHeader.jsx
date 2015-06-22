/** @jsx React.DOM */

define([
], function() {
	'use strict';

	var BlockHeader = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			return {
				width: window.width
			};
		};

		that.render = function() {
			var inlineStyle = {

			};
			return (
				<div className="block-header">
					{!!this.props.title ? <h1>{this.props.title}</h1> : ''}
					{!!this.props.text ? <p>{this.props.text}</p> : ''}
				</div>
			);
		};

		that.componentDidMount = function() {
			this.setState({width: $('.block-header').width()});
		};

		return React.createClass(that);
	};

	return new BlockHeader();
});
