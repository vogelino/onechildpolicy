/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',
	'views/layoutingComponents/Jumbotron/Jumbotron',
	'views/layoutingComponents/BlockHeader/BlockHeader',

	'json!../../../data/demographyData/urbanVsRural.json',
	'json!../../../data/demographyData/populationAge.json',

	'json!../../../data/birthAndChildhood/fertilityRate.json',
	'json!../../../data/birthAndChildhood/birthRate.json',
	'json!../../../data/birthAndChildhood/lifeExpectancyAtBirth.json'
], function(
	ChartsContainer,
	Jumbotron,
	BlockHeader,

	urbanVsRural,
	populationAge,

	fertilityRate,
	birthRate,
	lifeExpectancyAtBirth) {
	'use strict';

	var MainContainer = function() {
		var that = {};
		var my = {};

		that.mixins = [ReactIntl.IntlMixin];

		that.render = function() {
			var chartContainers = my.getChartContainers();
			var contents = {
				introduction: {
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing ' +
						'elit. Et, quia, autem. Obcaecati odit ipsa dolores enim ' +
						'deleniti officiis distinctio velit, aliquam provident ' +
						'deserunt, magnam dolorum! Dolore, labore minima? ' +
						'Pariatur, adipisci.'
				},
				jumbotron: {
					title: [
						'Is the one child polic',
						<span className='thin-space'></span>,
						'y a success?'
					],
					backgroundImage: 'content/images/china-one-child.jpg',
					blockquote: {
						quote: 'China says the policy reduced births by ' +
							' 400 million since 1970 — ' +
							'but some experts say the number may be ' +
							'closer to 100 million.',
						cite: {
							text: 'io9.com',
							link: 'http://io9.com/'
						}
					}
				},
				demographyHeader: {
					title: 'Chinese\'s demography evolution since the 60\'s',
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing ' +
						'elit. Et, quia, autem. Obcaecati odit ipsa dolores enim ' +
						'deleniti officiis distinctio velit, aliquam provident ' +
						'deserunt, magnam dolorum! Dolore, labore minima? ' +
						'Pariatur, adipisci.'
				},
				birthAndChildhoodHeader: {
					title: 'Chinese\'s births and fertility evolution since the 60\'s'
				}
			};

			return (
				<div id='main-container'>
					<Jumbotron {...contents.jumbotron} />
					<BlockHeader {...contents.introduction} />
					<BlockHeader {...contents.demographyHeader} />
					<ChartsContainer charts={chartContainers.demography} />
					<BlockHeader {...contents.birthAndChildhoodHeader} />
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
						formaters: {
							x: '%Y',
							y: function(y) {
								return y === 0 ? 0 : (y / 1000000) + ' Mio'
							}
						},
						type: 'line'
					},
					{
						title: 'Chinese\'s population by age groups',
						id: 'chart2',
						key: 2,
						data: populationAge,
						formaters: {
							x: '%Y',
							y: function(y) {
								return y === 0 ? 0 : y + '%'
							}
						},
						type: 'area-spline'
					}
				],
				birthAndChildhood: [
					{
						title: 'Chinese\'s fertility rate',
						id: 'chart3',
						key: 3,
						data: fertilityRate,
						type: 'line'
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
