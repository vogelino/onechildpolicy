/** @jsx React.DOM */

define([
], function() {
	'use strict';

	var ContentBlock = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			return {
				width: window.width
			};
		};

		that.render = function() {
			var altClass = !!this.props.alt ? ' alt' : '';
			var texts = my.getTexts(this.props.text);
			return (
				<div className={'content-block' + altClass}>
					{!!this.props.title ? <h1>{this.props.title}</h1> : ''}
					{texts}
				</div>
			);
		};

		that.componentDidMount = function() {
			this.setState({width: $('.content-block').width()});
		};

		my.getTexts = function(texts) {
			if (!texts) {
				return undefined;
			}
			if (!_.isArray(texts)) {
				texts = [texts];
			}

			return texts.map(function(paragraph, index) {
				return (
					<p key={index * Date.now()}>
						{paragraph}
					</p>
				);
			});
		};

		return React.createClass(that);
	};

	return new ContentBlock();
});
