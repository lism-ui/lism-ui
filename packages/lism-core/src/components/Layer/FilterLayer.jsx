// import React from 'react';
import Layer from './Layer';

const FILTERS = [
	'blur',
	'contrast',
	'brightness',
	'drop-shadow',
	'grayscale',
	'hue-rotate',
	'invert',
	// 'opacity',
	'saturate',
	'sepia',
];

export default function FilterLayer({
	//texture,
	css,
	backdropFilter,
	...props
}) {
	// const lismStyle = {};
	const backdropFilters = [];

	if (backdropFilter) {
		css = Object.assign({}, css, { backdropFilter });
	} else {
		FILTERS.forEach((filterName) => {
			if (props[filterName]) {
				backdropFilters.push(`${filterName}(${props[filterName]})`);
				delete props[filterName];
			}
		});

		if (backdropFilters.length > 0) {
			css = Object.assign({}, css, { backdropFilter: backdropFilters.join(' ') });
		}
	}

	return <Layer variant='filter' css={css} {...props} />;
}
