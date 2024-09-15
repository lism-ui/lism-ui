import isPresetValue from '../../lib/isPresetValue';
import getMaybeCssVar from '../../lib/getMaybeCssVar';

export default function getColumnsProps({
	_lismClass = [],
	style = {},
	variant = '',
	size,
	...props
}) {
	_lismClass.push('l--container');
	if (variant) _lismClass.push(`l--container--${variant}`);

	if (size) {
		if (isPresetValue('contentSize', size)) {
			props['data-content-size'] = size;
		} else {
			props['data-content-size'] = 'custom';
			style['--content-size'] = getMaybeCssVar(size, 'space');
		}
	}

	props._lismClass = _lismClass;
	props.style = style;
	return props;
}
