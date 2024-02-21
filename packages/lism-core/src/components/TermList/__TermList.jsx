import React from 'react';
import { Stack } from '../Flex';

export default function TermList({
	lismClass = {},
	lismStyle = {},
	fixW,
	fluidMinW,
	mode = 'stack',
	children,
	...props
}) {
	lismClass.c = 'c--termList';

	if (mode === 'fluid') {
		fixW = fixW || '10rem';
		fluidMinW = fluidMinW || '15rem';

		children = React.Children.map(children, (child, index) => {
			return React.cloneElement(child, { key: index, mode });
		});
	}

	if (fixW) lismStyle['--side--w'] = fixW;
	if (fluidMinW) lismStyle['--fluid--minW'] = fluidMinW;

	return (
		<Stack tag='dl' lismClass={lismClass} lismStyle={lismStyle} gap={30} {...props}>
			{children}
		</Stack>
	);
}
