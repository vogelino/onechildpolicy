/** @jsx React.DOM */

define([
	'views/charts/ChartsContainer/ChartsContainer',
	'views/layoutingComponents/Jumbotron/Jumbotron',
	'views/layoutingComponents/ContentBlock/ContentBlock',
	'views/layoutingComponents/Footer/Footer',

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
	ContentBlock,
	Footer,

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
			var loadedClass = !!this.state.loaded ? 'loaded' : 'loading';
			var className = 'main-wrapper ' + loadedClass;
			var contents = that.model.get('contents');
			var charts = that.model.get('charts');

			return (
				<div className={className}>
					<Jumbotron {...contents.jumbotron} />
					<ContentBlock {...contents.introduction} />
					<ContentBlock {...contents.demographyHeader} />
					<ChartsContainer charts={charts.absolutePopulation} />
					<ContentBlock {...contents.absolutePopulation} />
					<ChartsContainer charts={charts.populationAgeGroups} />
					<ContentBlock {...contents.populationAgeGroups} />
					<ContentBlock {...contents.birthAndChildhoodHeader}/>
					<ChartsContainer
						charts={charts.birthAndChildhood.fertility}
						aside={true}/>
					<ContentBlock
						{...contents.crudeBirthRate}
						alt={true} />
					<ChartsContainer
						charts={charts.birthAndChildhood.birthRate}
						aside={true}/>
					<ContentBlock {...contents.conclusionHeader}/>
					<Footer {...contents.footer}/>
				</div>
			);
		};

		my.getContents = function() {
			return {
				introduction: {
					text: texts.get('introduction.text'),
					alt: true
				},
				jumbotron: {
					title: texts.get('introJumbotron.title'),
					backgroundImage: 'content/images/china-one-child.jpg'
					// blockquote: {
					// 	quote: texts.get('introJumbotron.blockquote.quote'),
					// 	cite: {
					// 		text: texts.get('introJumbotron.blockquote.cite.text'),
					// 		link: texts.get('introJumbotron.blockquote.cite.link')
					// 	}
					// }
				},
				demographyHeader: {
					title: texts.get('demography.title'),
					text: texts.get('demography.text')
				},
				absolutePopulation: {
					text: texts.get('absolutePopulation.text')
				},
				populationAgeGroups: {
					text: texts.get('populationAgeGroups.text')
				},
				birthAndChildhoodHeader: {
					title: texts.get('birthAndChildhood.title'),
					text: texts.get('birthAndChildhood.text'),
					alt: true
				},
				crudeBirthRate: {
					text: texts.get('crudeBirthRate.text'),
					alt: true
				},
				conclusionHeader: {
					title: texts.get('conclusion.title'),
					text: texts.get('conclusion.text'),
					alt: false
				},
				footer: {
					columns: [
						{
							title: texts.get('footer.column1.title'),
							text: texts.get('footer.column1.text')
						}
					]
				}
			};
		};

		that.componentWillMount = function() {
			if (!that.model) {
				var Model = Backbone.Model.extend({});
				that.model = new Model();
			}

			that.model.set('contents', my.getContents());
			that.model.set('charts', my.getChartContainers());
		};

		that.componentDidMount = function() {
			my.checkElementsVisibility();
			this.setState({loaded: true});

			my.initVisibleElemOnScrollIdentifier();
		};

		my.initVisibleElemOnScrollIdentifier = function() {
			var checkElementsVisibility = _.throttle(my.checkElementsVisibility, 200);
			$(window).scroll(checkElementsVisibility);
		};

		my.checkElementsVisibility = function() {
			var $elems = $('.chart, .content-block, .jumbotron, .footer-content');
			$elems.each(function(index, elem) {
				if (my.isScrolledIntoView(elem)) {
					$(elem).addClass('visible');
				} else {
					$(elem).removeClass('visible');
				}
			});
		};

		my.isScrolledIntoView = function(elem) {
			var $elem = $(elem);
			var $window = $(window);

			var margin = $(elem).outerHeight();

			var docViewTop = $window.scrollTop();
			var docViewBottom = docViewTop + $window.height();

			var elemTop = $elem.offset().top;
			var elemBottom = elemTop + $elem.height();

			return ((elemBottom <= (docViewBottom + margin)) &&
				(elemTop >= (docViewTop - margin)));
		};

		my.getChartContainers = function() {
			return {
				absolutePopulation: [
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
												'horizontalLine1')
										},
										{
											value: 1457380000,
											text: texts.get('charts.' +
												'absolutePopulation.' +
												'horizontalLine2')
										}
									]
								}
							}
						}
					}
				],
				populationAgeGroups: [
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
					]
				}
			};
		};

		return React.createClass(that);
	};

	return new MainContainer();
});
