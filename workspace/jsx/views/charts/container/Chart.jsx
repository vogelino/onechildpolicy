/** @jsx React.DOM */

define([
	'c3'
], function(c3) {
	'use strict';

	var ChartsContainer = function() {
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
			var title = my.getTitleFromPath(this.props.options.path);
			return (
				<div className={className}>
					<h1>{title}</h1>
					<div className='loading-overlay'>{'Loading'}</div>
					<div id={this.props.options.id} />
				</div>
			);
		};

		that.componentDidMount = function() {
			var comp = this;
			require(['text!../' + comp.props.options.path], function() {
				my.renderChart({
					id: '#' + comp.props.options.id,
					url: comp.props.options.path,
					type: comp.props.type,
					onrendered: function() {
						comp.setState({loaded: true});
					}
				});
			});
		};

		my.getTitleFromPath = function(path) {
			return path
				.replace('data/timeTables/', '')
				.replace('.csv', '')
				.replace(/\-/g, ' ');
		};

		my.renderChart = function(additionalOptions) {
			var options = {
				bindto: additionalOptions.id,
				data: {
					x: 'Date',
					xFormat: '%Y',
					url: additionalOptions.url,
					type: additionalOptions.type,
					empty: {
						label: {
							text: 'No data'
						}
					}
				},
				axis: {
					x: {
						type: 'timeseries',
						tick: {
							format: '%Y'
						}
					}
				},
				onrendered: additionalOptions.onrendered,
				grid: {
					x: {
						lines: [
							{value: '1980', text: 'The one child policy is created'}
						]
					}
				}
			};

			return c3.generate(options);
		};

		return React.createClass(that);
	};

	return new ChartsContainer();
});
