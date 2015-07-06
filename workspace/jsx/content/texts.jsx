// jscs:disable maximumLineLength
define([], function() {
	'use strict';

	return {
		introJumbotron: {
			title: 'The effects of the one-child policy: Expectations and facts',
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
				'The chinese controversial law allowing couples to have only one child has been heavily discussed and debated since its enactment in 1980. On one hand, according to the Party leaders, the control over the population would be another of China\u2019s \u201Csuccesses\u201D. The policy is estimated to have prevented 400 million births, to have allowed a greater enrichment of families and a reduction of government expenditure on health and housing. On the other hand, conforming to Christopher Smith, Chairman of the Congressional-Executive Commission on China; this policy is a state sponsored violence against women and children, including especially the girl child, and constitutes massive crimes against humanity.',
				'In order to question the demographic effectiveness of one of the most polemical policies in the world, I decided to investigate and visualise relevant data from the World Bank. In doing so, the overall goal was to identify the repercussions that the policy has on different demographic indicators. I encountered many oppositions to my expectations and became confused as my statistical findings did not reflect the statements I could read in many articles online. The question of the reliability of this data may enter in the debate, as most of the used datasets come from World Bank WDI (World Development Indicators) which themselves comes from the government. However, the topic is large and many factors have to be taken in consideration. In a matter of scope, I will report about the confusions I had investigating the data. I will describe what seems to be contradictions beside my expectations and will make suppositions about some possible issues that the statistics reveal.'
			]
		},
		conclusion: {
			title: 'Blurry statistics lead to blurry analysis',
			text: [
				'It seems that the analysed sources are whether not fully reliable or simply that there are too many factors that influence the investigated indicators. China is a complex country with many cultural dimensions to consider and the policy has been kept well guarded inside the country borders.',
				'In 2013, the government may have realized the demographic imbalances caused by the policy and the decrease of the working aged population. The limits of their strategy had been reached and they needed to change the turning of the events. As losing manpower would be non beneficial, they relaxed the borders of the law, allowing couples constituted of one only child to have a second child.',
				'Finally, I was more optimistic about my findings at the beginning of my investigation than I am now. Understanding the effects of the one-child policy on China is a huge challenge and deserves to be studied carefully and exhaustively. Now that I got a foot in the topic, I will keep an eye on the evolution of China’s demographic and sociological situation.'
			]
		},
		demography: {
			title: 'China\'s demographic evolution since the 1960\'s',
			text: ['Because Mao Zedong\'s belief was that population growth would empower the country,  the population grew and no successful family planning strategy could be developed on time. In the 1970\u2019s already, China was populated by around 818 million people. In order to control the fertility rate and the demographic situation of the country, the Chinese government encouraged couples to marry later and to have two children at most. It was only in 1978 that the one-child policy was introduced and since then, only couples living in rural agglomerations who already had a daughter and couples where both spouses belonged to a  Chinese ethnic minority were allowed to have a second child.']
		},
		absolutePopulation: {
			text: 'In the dataset of China\u2019s absolute population, the numbers reveal a decrease of the rural population which is rather unexpected as rural couples where the ones allowed to have two children in some conditions. Aside from that, I would have attempted the increase of the total population as well as the urban population to become less drastic after the enactment of the policy. However, it is noticeable in the statistic that this growth started long before 1980 and apparently kept growing since then, even with a crescendo effect. We could then assume that the trend has become less dramatic than it could have been without the law. Still, the linearity of the population growth seems suspicious to me.'
		},
		populationAgeGroups: {
			text: 'Another interesting indicator for the policy\u2019s effects is the distribution of population ages. Even if we believe that 400 million births have been prevented, the fact that China\u2019s population is becoming older and that the young workforce is decreasing represents a big issue. The future generations of workers is shrinking, which is an economical disadvantage. Moreover, an aging population requires appropriated social services, treatments, infrastructures and staff. On the opposite of the other charts, this one reflects a phenomenon described in the press.'
		},
		birthAndChildhood: {
			title: 'Birth and fertility rate',
			text: [
				'If one of the goals of the policy was to prevent births, we could have expected to see a visible change after the initiation of the policy in 1980. However, it is noticeable that the decrease in the overall fertility rate has started even before the policy since 1975, when the government was already persuading the citizens to marry late and to have at most two children.',
				'Besides that, particular age groups have experienced a peak of their fertility rate at different times after 1980. For example the rate increased for women between 20 and 24 years old from 1.882 to 2.551 between 1975 and 1990. So one question remains: How can these culminations take place when the law strictly discourages to make children? This seems still unclear to me.'
			]
		},
		crudeBirthRate: {
			text: 'Chinese birth rate statistics are other sources of suspicion in this regard. In both investigated sources, the date shows that births augmented after the initiation of the policy before starting to sink again at the late 1980\u2019s. Since the middle of the 1960\u2019s, after China had partly recovered from the Three Years of Great Famine, the rate was on the opposite decreasing quite fast. So how could the birth rate have increased since 1980 to 1987 when the one child law was meant to prevent births? How could this peak happened when important fines had to be paid?'
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
		},
		footer: {
			column1: {
				title: 'About this project',
				text: [
					'This interactive vizualization is born in 2015 within the context of a course of Prof. Marian Doerk named Introduction to data visualization of the Fachhochschule Potsdam. While we, students, were learning about visualization\'s theory, we had to practically apply the learned knowledge to a personal project. Its realisation included the whole creation process that a data visualization project is used to.',
					'The website is a javascript webapp including svg visualizations build with modern technologies such as BackboneJs, React, Stylus and more.',
					<a href='http://www.vogelino.ch' target='_blank'>Lucas Vogel</a>,
					'BA Interface design – Summer semester 2015'
				]
			}
		}
	};
});
