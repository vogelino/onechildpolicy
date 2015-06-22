/** @jsx React.DOM */

define([
], function() {
	'use strict';

	var Blockquote = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var quote = this.props.quote;
			var cite  = this.props.cite;
			return (
				<blockquote className="citation">
					{!!quote ?
						<p>
							{quote}
						</p> : ''}
					{!!cite && !!cite.text && !!cite.link ?
						<footer>
							<cite>
								<a href={cite.link}>
									{cite.text}
								</a>
							</cite>
						</footer> : ''}
					{!!cite && !!cite.text && !cite.link ?
						<footer>
							<cite>
								{cite.text}
							</cite>
						</footer> : ''}
				</blockquote>
			);
		};

		return React.createClass(that);
	};

	return new Blockquote();
});
