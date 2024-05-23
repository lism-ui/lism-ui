import getEffectProps from '../getEffectProps';
import getInsetProps from '../getInsetProps';

export default function ({ _lismClass = [], variant, size, ...props }) {
	props = getEffectProps(getInsetProps(props));

	_lismClass.push('a--decorator');
	if (variant) _lismClass.push(`a--decorator--${variant}`);
	props._lismClass = _lismClass;

	if (size) {
		props.aspect = '1/1';
		props.w = size;
		// style['--size'] = size;
		// props.lismState = ['has--size'];
	}
	// props.style = style;

	const defaultProps = {
		_lismClass,
		skipState: true,
		'aria-hidden': 'true',
	};

	// aria-hidden='true'、デフォルトでつける？

	return Object.assign(defaultProps, props);
}
