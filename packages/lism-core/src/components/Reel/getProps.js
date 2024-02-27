export default function getReelProps({
	_lismClass = [],
	style = {},
	variant,
	unreel,
	itemW,
	snap,
	...props
}) {
	_lismClass.push('c--reel');
	if (variant) _lismClass.push(`c--reel--${variant}`);

	if (snap) props['data-snap'] = snap;
	if (unreel) props['data-unreel'] = unreel;
	if (undefined !== itemW) style['--item--w'] = itemW;
	// if (showScrollbar) props['data-show-scrollbar'] = showScrollbar;

	props._lismClass = _lismClass;
	props.style = style;
	props.tabIndex = '0';
	return props;
}
