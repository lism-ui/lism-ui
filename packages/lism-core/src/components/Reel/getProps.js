import atts from '../../lib/helper/atts';
import { mergeGridContextProps } from '../Grid/getProps';

export default function getReelProps({
	lismClass,
	variant,
	unreel,
	itemSize,
	snapAlign,
	style = {},
	...props
}) {
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
		{
			lismClass: atts(lismClass, 'c--reel', variant && `c--reel--${variant}`),
			style,
			tabIndex: '0',
		},
		mergeGridContextProps({ ...unreelProps, ...props })
	);
}
