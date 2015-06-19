/** @jsx React.DOM */

define([
	'views/charts/Chart/Chart'
], function(Chart) {
	'use strict';

	var ChartsContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartList = this.props.charts.map(function(chart) {
				return (
					<Chart options={chart} type={'area-step'} />
				);
			});
			return (
				<div className="charts-container">
					{chartList}
				</div>
			);
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
