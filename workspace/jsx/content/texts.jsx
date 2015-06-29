define([], function() {
	'use strict';

	return {
		introJumbotron: {
			title: 'Is the one child policy a success?',
			blockquote: {
				quote: 'China says the policy reduced births by 400 million since 1970 — but some experts say the number may be closer to 100 million.',
				cite: {
					text: 'io9.com',
					link: 'http://io9.com/'
				}
			}
		},
		introduction: {
			text: 'The chinese controversy law allowing couples to have only one child has been heavily discussed and debated since it started to be enacted in 1780. Despite the animated critics of its brutal methods such as forced abortions, selective abortions or important fines, the policy has been seen as another of China’s "successes" according to Party leaders. The government estimates the policy to have prevented 400 million births. However, some experts report that it may rather be closer to 100 million. So was it worth it?'
		},
		demography: {
			title: 'China\'s demography evolution since the 60\'s',
			text: 'Because of Mao Zedong\'s belief was that population growth would empower the country,  the population continued to increase and no successful family planning strategy could be developed. In the 70’s already china was populated by around 818 million people. In Order to control the fertily rate and to control the demographic situation of china, the chinese government encouraged the couples to marry later and to have two children at most. It’s later in 1978 that the one child policy was introduced and since then, only couples living in rural aglomerations who had already a girl and the couples where both spouses were coming from chinese minorities could make a second child.'
		},
		birthAndChildhood: {
			title: 'Birth and fertility rate',
			text: 'Because of Mao Zedong\'s belief was that population growth would empower the country,  the population continued to increase and no successful family planning strategy could be developed. In the 70’s already china was populated by around 818 million people. In Order to control the fertily rate and to control the demographic situation of china, the chinese government encouraged the couples to marry later and to have two children at most. It’s later in 1978 that the one child policy was introduced and since then, only couples living in rural aglomerations who had already a girl and the couples where both spouses were coming from chinese minorities could make a second child.'
		},
		charts: {
			absolutePopulation: {
				title: 'China\'s absolute population',
				source: 'World Bank',
				horizontalLine: 'The government tells that population would be 400 Mio bigger (1757.38 Mio) in 2013 without the one child policy'
			},
			populationAgeGroups: {
				title: 'China\'s population by age groups',
				source: 'World Bank',
				groups: {
					child: '% of population aged from 0 to 14',
					adult: '% of population aged from 15 to 64',
					old: '% of population aged 65 and above'
				}
			},
			fertility: {
				title: 'China\'s fertility rate'
			},
			birthRate: {
				title: 'China\'s crude birth rate'
			},
			lifeExpectancy: {
				title: 'China\'s life expectancy at birth'
			},
			sources: {
				worldBank: 'World Bank',
				unitedNations: 'United Nations'
			}
		}
	};
});
