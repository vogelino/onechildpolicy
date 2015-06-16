/** @jsx React.DOM */

define([
	'react',
	'c3'
], function(OriginalReact, c3) {
	'use strict';

	window.React = OriginalReact;

	var MainContainer = function() {
		var that = {}, my = {};

		that.render = function() {
			return (
				<div>
					<div id="chart1"></div>
					<div id="chart2"></div>
					<div id="chart3"></div>
					<div id="chart4"></div>
					<div id="chart5"></div>
					<div id="chart6"></div>
					<div id="chart7"></div>
				</div>
			);
		};

		that.componentDidMount = function() {
			var chart1 = my.renderChart({
				id: '#chart1',
				url: 'data/Adolescent-fertility-rate-births-per-1000-women-ages-15-19.csv'
			});
			var chart2 = my.renderChart({
				id: '#chart2',
				url: 'data/Age-dependency-ratio-percentage-of-working-age-population.csv'
			});
			var chart3 = my.renderChart({
				id: '#chart3',
				url: 'data/Age-dependency-ratio-young-percentage-of-working-age-population.csv'
			});
		};

		my.renderChart = function(additionalOptions) {
			var options = {
				bindto: additionalOptions.id,
				data: {
					x: 'Date',
					xFormat: '%Y',
					url: additionalOptions.url
				},
				axis: {
					x: {
						type: 'timeseries',
						tick: {
							format: '%Y'
						}
					}
				}
			};

			return c3.generate(options);
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
