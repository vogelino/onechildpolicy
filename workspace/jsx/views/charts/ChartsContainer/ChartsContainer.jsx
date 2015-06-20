/** @jsx React.DOM */

define([
	'views/charts/Chart/Chart'
], function(Chart) {
	'use strict';

	var ChartsContainer = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			return {
				width: window.width
			};
		};

		that.render = function() {
			var comp = this;
			var chartList = this.props.charts.map(function(chart, index) {
				return (
					<Chart
						title={chart.title}
						id={chart.id}
						data={chart.data}
						type={chart.type}
						key={chart.key}
						width={comp.state.width} />
				);
			});
			return (
				<div className="charts-container">
					{chartList}
				</div>
			);
		};

		that.componentDidMount = function() {
			this.setState({width: $('.charts-container').width()});
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
