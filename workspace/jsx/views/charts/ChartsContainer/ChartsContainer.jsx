/** @jsx React.DOM */

define([
	'views/charts/Chart/Chart'
], function(Chart) {
	'use strict';

	var ChartsContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartList = this.props.charts.map(function(chart, index) {
				return (
					<Chart {...chart} key={chart.id * 10} />
				);
			});
			var asideClassName = !!this.props.aside ? 'aside' : '';
			return (
				<div className={'charts-container ' + asideClassName}>
					{chartList}
				</div>
			);
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
