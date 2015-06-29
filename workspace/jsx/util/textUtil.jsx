define([
	'content/texts'
], function(texts) {
	'use strict';

	var that = {}, my = {};

	my.texts = texts;

	that.get = function(path) {
			if (!path) {
				return my.texts;
			}
			var paths = path.split('.'),
				current = my.texts,
				i;

			for (i = 0; i < paths.length; ++i) {
				if (_.isUndefined(current[paths[i]])) {
					return undefined;
				}

				current = current[paths[i]];
			}

			return current;
		};

	return that;
});
