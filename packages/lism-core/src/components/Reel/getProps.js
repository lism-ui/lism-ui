import { mergeGridContextProps } from '../Grid/getProps';

export default function getReelProps({
	_lismClass = [],
	style = {},
	variant,
	unreel,
	itemSize,
	snapAlign,
	...props
}) {
	_lismClass.push('c--reel');
	if (variant) _lismClass.push(`c--reel--${variant}`);

	if (undefined !== itemSize) style['--item-size'] = itemSize;
	if (snapAlign) style['--snap-align'] = snapAlign;
	// if (showScrollbar) props['data-show-scrollbar'] = showScrollbar;
	// if (unreel) props['data-unreel'] = unreel;

	let unreelProps = {};
	if (unreel) {
		unreelProps = {
			d: { [`${unreel}`]: 'grid' },
			gtc: { [`${unreel}`]: 'var(--unreel-gtc)' },
		};
	}

	return Object.assign(
		{ _lismClass, style, tabIndex: '0' },
		mergeGridContextProps({ ...unreelProps, ...props })
	);
}
