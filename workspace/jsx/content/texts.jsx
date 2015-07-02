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
					link: 'http://io9.com/did-chinas-one-child-policy-actually-reduce-population-1511784972'
				}
			}
		},
		introduction: {
			text: [
				'The chinese controversy law allowing couples to have only one child has been heavily discussed and debated since it started to be enacted in 1780. Despite the animated critics of its brutal methods such as forced abortions, selective abortions, forced sterilisations or important fines, the policy has been seen as another of China\u2019s \"successes\" according to Party leaders. The government estimates the policy to have prevented 400 million births. However, some experts report that it may rather be closer to 100 million. So was it worth it?',
				'In order to question the effectiveness of one of the most controversial policy in the world, I attempted to investigate and visualise relevant data. Doing so, my goal was to identify the repercussions the policy had on different factors. The following charts show my findings, surprises and discoveries.\r\n'
			]
		},
		conclusion: {
			title: 'Conclusion',
			text: [
				'It seems that the investigated factors have not been seen drastically affected by the unique child law and some \u201Cexperts tells that it is the most extreme example of state intervention in human reproduction in the modern era\u201D.',
				'As a non expert, I would like to avoid a too naive point of view and hasty presumptions. However, I\u2019m personally confused and would imagine the reasons of such policy to be mainly economic. Taxes and fees imposed by the government may have generated big amounts of profits. Less people lead to lower costs in social fields.\r\nIn 2013, the government may have realized the demographic imbalances caused by the policy and the decrease of the working aged population. The limits of their strategy had been reached and they needed to change the turning of the events. As losing manpower would be non beneficial, they relaxed the borders of the law.'
			]
		},
		demography: {
			title: 'China\'s demography evolution since the 60\'s',
			text: ['Because of Mao Zedong\'s belief was that population growth would empower the country,  the population raised and no successful family planning strategy could be developed on time. In the 70\u2019s already, China was populated by around 818 million people. In Order to control the fertility rate and the demographic situation of china, the chinese government encouraged the couples to marry later and to have two children at most. It\u2019s later in 1978 that the one child policy was introduced and since then, only couples living in rural agglomerations who had already a girl and the couples where both spouses were coming from chinese minorities could make a second child.\r\n']
		},
		absolutePopulation: {
			text: 'If we believe the chinese government, we should have remark a significant decrease of the population amount after the enacting of the policy. Surprisingly, the numbers only show a decrease of the rural population which is rather unexpected as rural couples where the ones allowed to have two children when the first one was a girl. Aside from that, the increase of the total population as well as the urban population started long before 1980 and apparently kept growing since then, even with a crescendo effect. This seems to contradicts the \u201Csuccess\u201D china\u2019s government seems to be convinced by.\r\n'
		},
		populationAgeGroups: {
			text: 'Another indicator for the policy\u2019s likely failure is the distribution of population ages. Even if we believe that 400 million births have been prevented, the fact that china\u2019s people are becoming older and that the young workforce is decreasing represent a great issue. The future generations of workers shrinks more and more and an increasing amount of old people requires appropriated social services, treatments, infrastructures and staff.'
		},
		birthAndChildhood: {
			title: 'Birth and fertility rate',
			text: 'Looking at the statistics of China\u2019s fertility rate, I also would have expected to identify important changes between before 1980 and afterwards. However, I see that the decrease of the amount of children per woman have began way before the policy. On the contrary, it seems that the fertility rate of adolescents and young adults climbed even more once the policy has been applied. So I ask myself how a government that drive couples to marry late and to have only one child with such an extreme policy that lets the fertility rate so unaffected can be seen as a success.'
		},
		crudeBirthRate: {
			text: 'Another thing that makes me wonder about is the birth rate statistics of the country. In both investigated sources, we remark that births augmented after the initiation of the policy before starting sinking again at the late 80\u2019s. Since the middle of the 60\u2019s, after China has partly recovered from the great famine, the rate was on the opposite decreasing quite fast. So how could the birth rate have increased while the one child law ruled and was meant to prevent births? How could this peak happen when important fees had to be paid?'
		},
		charts: {
			absolutePopulation: {
				title: 'China\'s absolute population',
				source: 'World Bank',
				horizontalLine1: 'The government tells that population would be 400 Mio bigger (1757.38 Mio) in 2013 without the one child policy',
				horizontalLine2: 'Experts tell that population would rather be only 100 Mio bigger (1457.38 Mio)'
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
