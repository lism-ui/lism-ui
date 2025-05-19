import atts from '../../lib/helper/atts';

import getEffectProps from '../getEffectProps';
import getInsetProps from '../getInsetProps';

export default function ({ lismClass, size, ...props }) {
	props = getEffectProps(getInsetProps(props));

	if (size) {
		props.ar = '1/1';
		props.w = size;
		// style['--size'] = size;
		// props.lismState = ['has--size'];
	}
	// props.style = style;

	const defaultProps = {
		lismClass: atts(lismClass, `l--decorator`),
		skipState: true,
		'aria-hidden': 'true',
	};

	return Object.assign(defaultProps, props);
}
