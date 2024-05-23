// import React from 'react';

import { Grid, Flex, GridItem, FlexItem, Decorator } from '@lism-ui/core';

export default function PipipiBox({ variant = 'left', children, ...props }) {
	const lismClass = ['c--pipipi'];
	if (variant) lismClass.push(`c--pipipi--${variant}`);

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

			// boxProps: { gt: 'side:r', ai: 'start' },
			// bodyProps: { ta: 'right' },
			// decoratorProps: { m: '1px', bd: 'left', rotate: '45deg', translate: '0% 50%' },

			break;
		default:
			break;
	}

	return (
		<Flex
			lismClass={lismClass}
			ai='start'
			bdc='currentColor'
			// passProps={{ bdw, bdc, bgc }}
			{...parentProps}
			{...props}
		>
			<FlexItem layout={Decorator} pos='r' size='.5em' variant='pipipi' {...decoProps}>
				<Decorator pos='a' inset='c' />
			</FlexItem>
			<FlexItem p='box:s' pb='0' lh='s' mt='10' {...bodyProps}>
				{children}
			</FlexItem>
			{/* {boxCntent} */}
			{/* {decorator} */}
		</Flex>
	);
}
