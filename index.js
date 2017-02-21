'use strict';

module.exports = function (string, regexp, nth) {
	if (typeof (nth) !== 'number' || nth <= 0) {
		nth = 1;
	}
	if (!/g/.test(regexp.flags)) {
		regexp = new RegExp(regexp.source, regexp.flags + 'g');
	}
	let matches = [];
	for (let i = 0; i < nth; i++) {
		const match = regexp.exec(string);
		if (match) {
			matches.push(match);
		} else {
			break;
		}
	}
	return matches.length >= nth ? matches[nth - 1].index : -1;
};
