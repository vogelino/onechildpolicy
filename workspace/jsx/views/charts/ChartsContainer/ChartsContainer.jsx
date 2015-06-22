/** @jsx React.DOM */

define([
	'views/charts/Chart/Chart'
], function(Chart) {
	'use strict';

	var ChartsContainer = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			that.comp = this;
			return {
				width: window.width
			};
		};

		that.render = function() {
			var chartList = this.props.charts.map(function(chart, index) {
				return (
					<Chart {...chart} />
				);
			});
			return (
				<div className="charts-container">
					{chartList}
				</div>
			);
		};

		that.componentDidMount = function() {
			my.resizeCharts();
			$(window).resize(my.resizeCharts);
		};

		my.resizeCharts = function() {
			that.comp.props.charts.forEach(function(chart) {
				that.comp.setState({
					width: $(chart.id).innerWidth()
				});
			});
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
