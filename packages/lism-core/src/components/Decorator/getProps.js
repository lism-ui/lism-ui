import getEffectProps from '../getEffectProps';
import getInsetProps from '../getInsetProps';

export default function ({ _lismClass = [], variant, size, style = {}, ...props }) {
	props = getEffectProps(getInsetProps(props));

	_lismClass.push('e--deco');
	if (variant) _lismClass.push(`e--deco--${variant}`);
	props._lismClass = _lismClass;

	if (size) style['--size'] = size;
	props.style = style;

	const defaultProps = {
		_lismClass,
		style,
		skipState: true,
		'aria-hidden': 'true',
	};

	// aria-hidden='true'、デフォルトでつける？

	return Object.assign(defaultProps, props);
}
