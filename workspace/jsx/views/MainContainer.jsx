/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',

	'json!../../../data/demographyData/urbanVsRural.json',
	'json!../../../data/demographyData/populationAge.json',

	'json!../../../data/birthAndChildhood/fertilityRate.json',
	'json!../../../data/birthAndChildhood/birthRate.json',
	'json!../../../data/birthAndChildhood/lifeExpectancyAtBirth.json'
], function(
	ChartsContainer,

	urbanVsRural,
	populationAge,

	fertilityRate,
	birthRate,
	lifeExpectancyAtBirth) {
	'use strict';

	var MainContainer = function() {
		var that = {};
		var my = {};

		that.render = function() {
			var chartContainers = my.getChartContainers();

			return (
				<div id='main-container'>
					<div className='block-header'>
						<h1>
							{'Chinese\'s demography evolution since the 60\'s'}
						</h1>
						<p>
							{'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, quia, autem. Obcaecati odit ipsa dolores enim deleniti officiis distinctio velit, aliquam provident deserunt, magnam dolorum! Dolore, labore minima? Pariatur, adipisci.'}
						</p>
					</div>
					<ChartsContainer charts={chartContainers.demography} />
					<div className='block-header'>
						<h1>
							{'Chinese\'s births and fertility evolution since the 60\'s'}
						</h1>
					</div>
					<ChartsContainer charts={chartContainers.birthAndChildhood} />
				</div>
			);
		};

		my.getChartContainers = function() {
			return {
				demography: [
					{
						title: 'Chinese\'s absolute population',
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
				],
				birthAndChildhood: [
					{
						title: 'Chinese\'s fertility rate',
						id: 'chart3',
						key: 3,
						data: fertilityRate,
						type: 'area-step'
					},
					{
						title: 'Chinese\'s crude birth rate',
						id: 'chart4',
						key: 4,
						data: birthRate,
						type: 'line'
					},
					{
						title: 'Chinese\'s life expectancy at birth',
						id: 'chart5',
						key: 5,
						data: lifeExpectancyAtBirth,
						type: 'line'
					}
				]
			};
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
