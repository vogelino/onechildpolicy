/** @jsx React.DOM */

define([
	'c3'
], function(c3) {
	'use strict';

	var Chart = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			return {
				loaded: false
			};
		};

		that.render = function() {
			var opts = this.props.options;
			var loadedClass = !!this.state.loaded ? 'loaded' : 'loading';
			var altClass = !!this.props.alt ? ' alt' : '';
			var className = 'chart ' +
					opts.data.type + '-chart ' +
					loadedClass +
					altClass;
			return (
				<div className={className} key={this.props.id}>
					<h2>{this.props.title}</h2>
					<cite>{this.props.source}</cite>
					<div className='loading-overlay'>{'Loading'}</div>
					<div className='chart-wrapper'>
						<div id={'chart' + this.props.id} />
					</div>
				</div>
			);
		};

		that.componentDidMount = function() {
			var comp = this;

			var defaults = {};

			defaults.bindto = '#chart' + comp.props.id;

			defaults.onrendered = function() {
				comp.setState({loaded: true});
			};

			var options = !!comp.props.options ?
					$.extend({}, defaults, comp.props.options, true) : {};

			my.c3Chart = c3.generate(my.getChartConfig(options));
		};

		my.getChartConfig = function(options) {

			if (!options) { return undefined; };

			var defaults = {
				padding: {
					left: 60,
					right: 30,
				},
				color: {
					pattern: [
						'#7690e4',
						'#cf4e43',
						'#e8ab44',
						'#CC7EBE',
						'#6B8838',
						'#69788C',
						'#68D789',
						'#B1866F',
						'#C5D597',
						'#C76077',
						'#D2D249',
						'#5B8A6D',
						'#C58E37',
						'#CCC4CF',
						'#8193D1'
					]
				},
				data: {
					keys: {
						x: 'Date'
					},
					empty: {
						label: {
							text: 'No data'
						}
					}
				},
				size: {
					height: 320
				},
				axis: {
					x: {
						type: 'indexed',
						tick: {
							culling: true,
							outer: false
						}
					},
					y: {
						tick: {
							outer: false
						}
					}
				},
				grid: {
					x: {
						lines: [
							{value: '1980', text: 'The one child policy starts'},
							{value: '1978', text: 'Family planning policy is introduced'}
						]
					}
				}
			};

			var options = $.extend(true, defaults, options);
			options.data.keys.value = my.getKeysValueByDataNode(options.data.json[0]);

			return options;
		};

		my.getKeysValueByDataNode = function(dataNode) {
			var keysValue = [];
			_.each(dataNode, function(val, key) {
				if (key !== 'Date') {
					keysValue.push(key);
				}
			})
			return keysValue;
		};

		return React.createClass(that);
	};

	return new Chart();
});
