/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',
	'json!../../../data/demographyData/urbanVsRural.json',
	'json!../../../data/demographyData/populationAge.json'
], function(ChartsContainer, urbanVsRural, populationAge) {
	'use strict';

	var MainContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartContainers = [
				{
					title: 'Absolute chinese population',
					id: 'chart1',
					key: 1,
					data: urbanVsRural,
					type: 'area-step'
				},
				{
					title: 'Chinese\'s population by age groups',
					id: 'chart2',
					key: 2,
					data: populationAge,
					type: 'area-spline'
				}
			];

			return (
				<div id='main-container'>
					<h1 className='main-title'>
						{'The evolution of the chinese demography since the 60\'s'}
					</h1>
					<ChartsContainer charts={chartContainers} />
				</div>
			);
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
