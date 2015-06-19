/** @jsx React.DOM */

define([
	'json!../../../data/lists/timeTables.json',
	'views/charts/ChartsContainer/ChartsContainer'
], function(timeTablesList, ChartsContainer) {
	'use strict';

	var MainContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartContainers = _.map(timeTablesList, function(path, index) {
				var chartId = 'chart' + (index + 1);
				return {
					id: chartId,
					key: index,
					path: path.replace('workspace/', '')
				};
			});

			return (
				<div id='main-container'>
					<ChartsContainer charts={chartContainers} />
				</div>
			);
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
