import { mergeGridContextProps } from '../Grid/getProps';

export default function getReelProps({
	unreel,
	itemSize,
	snapType,
	snapAlign,
	snapStop,
	style = {},
	...props
}) {
	if (undefined !== itemSize) style['--item-size'] = itemSize;
	if (snapAlign) style['--snapAlign'] = snapAlign;
	if (snapType) style['--snapType'] = snapType;
	if (snapStop) style['--snapStop'] = snapStop;
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
			style,
			tabIndex: '0',
		},
		mergeGridContextProps({ ...unreelProps, ...props })
	);
}
