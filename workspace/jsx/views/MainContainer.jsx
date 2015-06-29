/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',
	'views/layoutingComponents/Jumbotron/Jumbotron',
	'views/layoutingComponents/BlockHeader/BlockHeader',

	'util/textUtil',

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

	texts,

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
					text: texts.get('introduction.text'),
					alt: true
				},
				jumbotron: {
					title: texts.get('introJumbotron.title'),
					backgroundImage: 'content/images/china-one-child.jpg',
					blockquote: {
						quote: texts.get('introJumbotron.blockquote.quote'),
						cite: {
							text: texts.get('introJumbotron.blockquote.cite.text'),
							link: texts.get('introJumbotron.blockquote.cite.link')
						}
					}
				},
				demographyHeader: {
					title: texts.get('demography.title'),
					text: texts.get('demography.text')
				},
				birthAndChildhoodHeader: {
					title: texts.get('birthAndChildhood.title'),
					text: texts.get('birthAndChildhood.text'),
					alt: true
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
						title: texts.get('charts.absolutePopulation.title'),
						source: texts.get('charts.sources.worldBank'),
						id: 1,
						options: {
							data: {
								type: 'line',
								json: urbanVsRural
							},
							axis: {
								x: {
									tick: {
										format: '%Y'
									}
								},
								y: {
									tick: {
										format: function(y) {
											return y === 0 ?
												0 : (y / 1000000) + ' Mio'
										}
									},
									max: 1757380000
								}
							},
							grid: {
								y: {
									lines: [
										{
											value: 1757380000,
											text: texts.get('charts.' +
												'absolutePopulation.' +
												'horizontalLine')
										}
									]
								}
							}
						}
					},
					{
						title: texts.get('charts.populationAgeGroups.title'),
						source: texts.get('charts.sources.worldBank'),
						id: 2,
						options: {
							data: {
								type: 'area-spline',
								json: populationAge,
								groups: [
									[texts.get(
										'charts.populationAgeGroups.groups.child'),
									texts.get(
										'charts.populationAgeGroups.groups.adult'),
									texts.get(
										'charts.populationAgeGroups.groups.old')]
								]
							},
							axis: {
								x: {
									tick: {
										format: '%Y'
									}
								},
								y: {
									tick: {
										format: function(y) {
											return y === 0 ? 0 : y + '%'
										}
									},
									max: 100,
									padding: {top: 3, bottom: 0}
								}
							}
						}
					}
				],
				birthAndChildhood: {
					fertility: [
						{
							title: texts.get('charts.fertility.title'),
							source: texts.get('charts.sources.worldBank'),
							id: 3,
							alt: true,
							options: {
								data: {
									type: 'line',
									json: fertilityRate
								}
							}
						},
						{
							title: texts.get('charts.fertility.title'),
							source: texts.get('charts.sources.unitedNations'),
							id: 4,
							alt: true,
							options: {
								data: {
									type: 'line',
									json: fertilityRateUndesa
								},
								tooltip: {
									format: {
										title: function(x) {
											return (parseInt(x, 10) - 5) + ' - ' + x
										}
									}
								},
								axis: {
									x: {
										tick: {
											format: function(x) {
												return (parseInt(x, 10) - 5) + ' - ' + x
											}
										}
									}
								}
							}
						}
					],
					birthRate: [
						{
							title: texts.get('charts.birthRate.title'),
							source: texts.get('charts.sources.worldBank'),
							id: 5,
							alt: true,
							options: {
								data: {
									type: 'line',
									json: birthRate
								}
							}
						},
						{
							title: texts.get('charts.birthRate.title'),
							source: texts.get('charts.sources.unitedNations'),
							id: 6,
							alt: true,
							options: {
								data: {
									type: 'line',
									json: birthRateUndesa
								},
								tooltip: {
									format: {
										title: function(x) {
											return (parseInt(x, 10) - 5) + ' - ' + x
										}
									}
								},
								axis: {
									x: {
										tick: {
											format: function(x) {
												return (parseInt(x, 10) - 5) + ' - ' + x
											}
										}
									}
								}
							}
						}
					],
					lifeExpectancy: [
						{
							title: texts.get('charts.lifeExpectancy.title'),
							source: texts.get('charts.sources.worldBank'),
							id: 7,
							options: {
								data: {
									type: 'line',
									json: lifeExpectancyAtBirth
								}
							}
						}
					]
				}
			};
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
