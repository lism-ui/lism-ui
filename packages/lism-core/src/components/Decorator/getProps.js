import getEffectProps from '../getEffectProps';
import getInsetProps from '../getInsetProps';

export default function ({ _lismClass = [], variant, lismState = [], hasSize, index, ...props }) {
	props = getEffectProps(getInsetProps(props));

	_lismClass.push('e--deco');
	if (variant) _lismClass.push(`e--deco--${variant}`);
	props._lismClass = _lismClass;

	if (hasSize) lismState.push('has--size');
	props.lismState = lismState;

	if (null != index) {
		props['data-index'] = index;
	}

	// aria-hidden='true'、デフォルトでつける？

	return props;
}
