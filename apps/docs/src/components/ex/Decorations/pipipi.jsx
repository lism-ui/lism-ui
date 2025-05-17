// import React from 'react';

import { Flex, Decorator, Box } from '@lism-ui/core';

export default function PipipiBox({ variant = 'left', children, ...props }) {
	let lismClass = 'b--pipipi';
	if (variant) lismClass += ` b--pipipi--${variant}`;

	let parentProps = {};
	let bodyProps = {};
	let decoProps = {};
	switch (variant) {
		case 'left':
			// parentProps = { ai: 'start' };
			// bodyProps = { ta: 'left' };
			decoProps = {
				// bd: 'left',
				rotate: '-45deg',
				translate: '100% 50%',
				transformOrigin: 'right bottom',
			};
			break;
		case 'right':
			parentProps = { fxd: 'rr' };
			decoProps = {
				// m: '1px',
				// bd: 'right',
				rotate: '45deg',
				translate: '-100% 50%',
				transformOrigin: 'left bottom',
			};
			break;
		default:
			break;
	}

	return (
		<Flex lismClass={lismClass} ai='start' bdc='currentColor' {...parentProps} {...props}>
			<Decorator pos='r' size='.5em' variant='pipipi' {...decoProps}>
				<Decorator pos='a' l='50%' />
			</Decorator>
			<Box p='20' pb='0' lh='s' mt='10' {...bodyProps}>
				{children}
			</Box>
		</Flex>
	);
}
