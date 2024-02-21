// import React from 'react';
import { Flex, Stack } from '../Flex';

// snap-type, snap-stopも指定できるようにする？
export default function Reel({
	lismClass = {},
	lismStyle = {},
	variant,
	unreel,
	itemW,
	snap,
	isVertical,
	children,
	...props
}) {
	lismClass.c = 'c--reel';
	if (variant) lismClass.c += ` c--reel--${variant}`;

	if (undefined !== itemW) {
		lismStyle['--item--w'] = itemW;
	}

	if (unreel) {
		props['data-unreel'] = unreel;
	}
	if (snap) {
		props['data-snap'] = snap;
	}

	// if (props.hasDivider === true) {
	// 	props.hasDivider = 'B';
	// }

	// if (showScrollbar) {
	// 	props['data-show-scrollbar'] = showScrollbar;
	// }
	const Layout = isVertical ? Stack : Flex;
	return (
		<Layout lismClass={lismClass} lismStyle={lismStyle} tabIndex='0' {...props}>
			{children}
		</Layout>
	);
}
