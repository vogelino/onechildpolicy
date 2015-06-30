// jscs:disable maximumLineLength
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
			text: [
				'Because of Mao Zedong\'s belief was that population growth would empower the country,  the population continued to increase and no successful family planning strategy could be developed. In the 70’s already china was populated by around 818 million people. In Order to control the fertily rate and to control the demographic situation of china, the chinese government encouraged the couples to marry later and to have two children at most. It’s later in 1978 that the one child policy was introduced and since then, only couples living in rural aglomerations who had already a girl and the couples where both spouses were coming from chinese minorities could make a second child.',
				'In order to question the success of the most controversed policy in the world, I attempted to have a look at significant data and to put it in relation with the facts I could read in the press and particulary online.'
			]
		},
		absolutePopulation: {
			text: 'If we believe the chinese governement, we should have remark a significant decrease of the population amount after the enacting of the policy. Suprisingly, while looking at the numbers, we can only see a decrease of the rural population which is rather unexpected as rural couple where the ones allowed to have two children when the first one was a girl. Aside from that, the increase of the total population as well as the urban population has started long before 1980 and had kept growing since then, even with a crescendo effect. This phenomenon contradicts the \u201Csuccess\u201D china\u2019s government seems to communicate.'
		},
		populationAgeGroups: {
			text: 'Another indicator for the policy\u2019s likely failure is the distribution of population\u2019s ages. Even if we believe that 400 million births have been prevented, the fact that china\u2019s people are becoming older and that the young work force is decreasing represent a great issue. The next generation of workers is becoming shrinks more and more and a increasing of old people require to be carried on with proper infrastructures and personal.'
		},
		birthAndChildhood: {
			title: 'Birth and fertility rate',
			text: 'Looking at the statistics of China\u2019s fertiliy rate, I also would have expected to identify important changes between before 1980 and afterwards but what I see, is that the decrease of childrens per woman have began way before the policy. On the contrary, it seems that the fertility rate of adolescent and young adults enlarged even more once the policy has been applied. So I ask myself how can it be that while the government recomends the couples to marry late and to have only one child with such an extreme policy the fertility rate seems to be unaffected.\r\n'
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
