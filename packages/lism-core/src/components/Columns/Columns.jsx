// import React from 'react';
import { Grid } from '../Grid';
import getBpData from '../../lib/getBpData';
import isEmptyObj from '../../lib/helper/isEmptyObj';

// function getColumnsVars(cols) {
// 	let baseCols = cols._ || 2;

// 	// ~8のときは省略したい
// 	if (baseCols <= 8) {
// 		baseCols = null;
// 	}

// 	return {
// 		'--cols': baseCols || null,
// 		'--cols--sm': cols.sm || null,
// 		'--cols--xs': cols.xs || null,
// 		// "--cols--lg": cols.lg || null,
// 		// "--cols--xl": cols.xl || null,
// 	};
// }

// PRESET '1-2-3' 1-2, 1-2-4 ?
// clms, cols, repeat
export default function Columns({ columns, cols, lismStyle = {}, ...props }) {
	cols = columns || cols || [1, 2];
	const gridProps = {
		_grid: 'columns',
		gap: 20, // 初期値
	};
	const { _: baseValue, ...bpValues } = getBpData(cols);

	if (null != baseValue) {
		lismStyle['--cols'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		Object.keys(bpValues).forEach((bp) => {
			lismStyle[`--cols--${bp}`] = bpValues[bp];
		});
		// gridProps.gtc = bpValues;
	}

	return <Grid _grid='columns' lismStyle={lismStyle} {...gridProps} {...props} />;
}
