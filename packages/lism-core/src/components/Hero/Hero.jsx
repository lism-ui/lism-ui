// import React from 'react';
import { Stack } from '../Flex';
// import { Grid } from '../Grid';

// align: full, wide, ''
export default function Hero({
	lismClass = {},
	variant,
	as,
	bgc = 'base-2',
	isFullScreen,
	...attrs
}) {
	lismClass.c = 'c--hero';
	if (variant) lismClass.c += ` c--hero--${variant}`;

	const blockProps = { bgc, 'data-fullscreen': isFullScreen ? '1' : null };

	const Component = as || Stack;

	return <Component isFullwide lismClass={lismClass} {...blockProps} {...attrs} />;
}
