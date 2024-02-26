import getBpData from '../../lib/getBpData';
import isEmptyObj from '../../lib/helper/isEmptyObj';

export default function getColumnsProps({ cols, style = {}, ...props }) {
	cols = cols || [1, 2];
	const { _: baseValue, ...bpValues } = getBpData(cols);

	if (null != baseValue) {
		style['--cols'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		Object.keys(bpValues).forEach((bp) => {
			style[`--cols--${bp}`] = bpValues[bp];
		});
		// defaultProps.gtc = bpValues;
	}

	props.style = style;
	return props;
}

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
