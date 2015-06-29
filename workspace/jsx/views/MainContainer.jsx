/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',
	'views/layoutingComponents/Jumbotron/Jumbotron',
	'views/layoutingComponents/BlockHeader/BlockHeader',

	'json!../../../data/demographyData/urbanVsRural.json',
	'json!../../../data/demographyData/populationAge.json',

	'json!../../../data/birthAndChildhood/fertilityRate.json',
	'json!../../../data/birthAndChildhood/fertilityRateUndesa.json',
	'json!../../../data/birthAndChildhood/birthRate.json',
	'json!../../../data/birthAndChildhood/birthRateUndesa.json',
	'json!../../../data/birthAndChildhood/lifeExpectancyAtBirth.json'
], function(
	ChartsContainer,
	Jumbotron,
	BlockHeader,

	urbanVsRural,
	populationAge,

	fertilityRate,
	fertilityRateUndesa,
	birthRate,
	birthRateUndesa,
	lifeExpectancyAtBirth) {
	'use strict';

	var MainContainer = function() {
		var that = {};
		var my = {};

		that.mixins = [ReactIntl.IntlMixin];

		that.getInitialState = function() {
			return {
				loaded: false
			};
		};

		that.render = function() {
			var chartContainers = my.getChartContainers();
			var loadedClass = !!this.state.loaded ? 'loaded' : 'loading';
			var className = 'main-wrapper ' + loadedClass;
			var contents = {
				introduction: {
					text: 'The chinese controversy law allowing couples to have only one child has been heavily discussed and debated since it started to be enacted in 1780. Despite the animated critics of its brutal methods such as forced abortions, selective abortions or important fines, the policy has been seen as another of China’s "successes" according to Party leaders. The government estimates the policy to have prevented 400 million births. However, some experts report that it may rather be closer to 100 million. So was it worth it?'
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
					text: 'Because of Mao Zedong\'s belief was that population growth would empower the country,  the population continued to increase and no successful family planning strategy could be developed. In the 70’s already china was populated by around 818 million people. In Order to control the fertily rate and to control the demographic situation of china, the chinese government encouraged the couples to marry later and to have two children at most. It’s later in 1978 that the one child policy was introduced and since then, only couples living in rural aglomerations who had already a girl and the couples where both spouses were coming from chinese minorities could make a second child.'
				},
				birthAndChildhoodHeader: {
					title: 'Chinese\'s births and fertility evolution since the 60\'s'
				}
			};

			return (
				<div className={className}>
					<Jumbotron {...contents.jumbotron} />
					<BlockHeader {...contents.introduction} />
					<BlockHeader {...contents.demographyHeader} />
					<ChartsContainer charts={chartContainers.demography} />
					<BlockHeader {...contents.birthAndChildhoodHeader} alt={true} />
					<ChartsContainer charts={chartContainers.birthAndChildhood.fertility} aside={true}/>
					<ChartsContainer charts={chartContainers.birthAndChildhood.birthRate} aside={true}/>
					<ChartsContainer charts={chartContainers.birthAndChildhood.lifeExpectancy} />
				</div>
			);
		};

		that.componentDidMount = function() {
			this.setState({loaded: true});
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
