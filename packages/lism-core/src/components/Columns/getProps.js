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
			style[`--${bp}-cols`] = bpValues[bp];
		});
		// defaultProps.gtc = bpValues;
	}

	props.style = style;
	return props;
}
