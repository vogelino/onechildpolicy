define([], function() {
	'use strict';

	var Footer = function() {
		var that = {};
		var my = {};

		that.getInitialState = function() {
			return {};
		};

		that.render = function() {
			var cloumnClass = 'footer footer-' + this.props.columns.length + '-columns';
			return (
				<footer className={cloumnClass}>
					<div className='footer-container'>
						<div className='footer-content'>
							{this.props.columns.map(function(column) {
								return (
									<div className='footer-column'
										key={'footer-column-' + my.getRandomId()}>
											{my.getColumnTitle(column)}
											{my.getColumnBody(column)}
									</div>
								);
							})}
						</div>
					</div>
				</footer>
			);
		};

		my.getColumnTitle = function(column) {
			if (column.title && column.title.length) {
				return (<h4 className='footer-column-title'>{column.title}</h4>);
			}
			return undefined;
		};

		my.getColumnBody = function(column) {
			if (!!column.text && _.isString(column.text)) {
				return (<p className='footer-column-text'>{column.text}</p>);
			}
			if (!!column.text && _.isArray(column.text)) {
				var paragraphs = column.text.map(function(paragraph) {
					return (<p className='footer-column-text'
							key={'footer-paragraph-' + my.getRandomId()}>
							{paragraph}
						</p>)
				});

				return ({paragraphs});
			}
			return undefined;
		};

		my.getRandomId = function() {
			return Date.now() * Math.random();
		};

		return React.createClass(that);
	};

	return new Footer();
});
