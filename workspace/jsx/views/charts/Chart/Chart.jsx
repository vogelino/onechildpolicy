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
			var loadedClass = !!this.state.loaded ? 'loaded' : 'loading';
			var className = 'chart ' + this.props.type + '-chart ' + loadedClass;
			return (
				<div className={className}>
					<h2>{this.props.title}</h2>
					<div className='loading-overlay'>{'Loading'}</div>
					<div className="chart-wrapper">
						<div id={this.props.id} />
					</div>
				</div>
			);
		};

		that.componentDidMount = function() {
			var comp = this;
			my.c3Chart = c3.generate(my.getChartConfig({
				id: '#' + comp.props.id,
				json: comp.props.data,
				type: comp.props.type,
				xFormater: comp.props.formaters && comp.props.formaters.x ?
					comp.props.formaters.x : undefined,
				yFormater: comp.props.formaters && comp.props.formaters.y ?
					comp.props.formaters.y : undefined,
				onrendered: function() {
					comp.setState({loaded: true});
				}
			}));
		};

		my.getChartConfig = function(additionalOptions) {
			return {
				bindto: additionalOptions.id,
				padding: {
					left: 60,
					right: 30,
				},
				color: {
					pattern: [
						'#51c181',
						'#db6c58',
						'#5eabdb',
						'#e8ab44',
						'#1f313b'
					]
				},
				data: {
					json: additionalOptions.json,
					keys: {
						x: 'Date',
						value: my.getKeysValueByDataNode(additionalOptions.json[0])
					},
					type: additionalOptions.type,
					empty: {
						label: {
							text: 'No data'
						}
					}
				},
				size: {
					width: additionalOptions.width,
					height: 320
				},
				axis: {
					x: {
						type: 'indexed',
						tick: {
							format: additionalOptions.xFormater || function(x) {
								return x;
							},
							culling: true,
							outer: false
						}
					},
					y: {
						tick: {
							outer: false,
							format: additionalOptions.yFormater || function(y) {
								return y;
							}
						}
					}
				},
				onrendered: additionalOptions.onrendered,
				grid: {
					x: {
						lines: [
							{value: '1980', text: 'The one child policy starts'},
							{value: '1978', text: 'Family planning policy is introduced'}
						]
					}
				}
			};
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
