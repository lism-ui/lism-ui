// import React from 'react';

import { Stack, Flex, GridItem, FlexItem, Decorator } from '@lism-ui/core';

export default function BalloonBox({
	variant = 'left',
	bdw = '1px',
	bdc = 'currentColor',
	bgc = 'base',
	boxcolor,
	children,
	...props
}) {
	const lismClass = ['c--balloon'];
	if (variant) lismClass.push(`c--balloon--${variant}`);

	let ParentComponent = null;
	let parentProps = {};
	let decoProps = {};
	switch (variant) {
		case 'left':
			ParentComponent = Flex;
			decoProps.l = 'var(--pass--bdw)';
			decoProps.css = {
				rotate: '45deg',
				translate: '50%',
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
			};
			break;
		case 'right':
			ParentComponent = Flex;
			parentProps = { jc: 'end' };
			decoProps.r = 'var(--pass--bdw)';
			decoProps.ord = '1';
			decoProps.css = {
				rotate: '-45deg',
				translate: '-50%',
				clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
			};

			break;
		case 'top':
			ParentComponent = Stack;
			decoProps.t = 'var(--pass--bdw)';
			decoProps.css = {
				rotate: '45deg',
				translate: '0 50%',
				clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
			};

			break;
		case 'bottom':
			ParentComponent = Stack;
			decoProps.b = 'var(--pass--bdw)';
			decoProps.ord = '1';
			decoProps.css = {
				rotate: '45deg',
				translate: '0 -50%',
				clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
			};
			break;
		default:
			break;
	}

	return (
		<ParentComponent
			lismClass={lismClass}
			ai='center'
			passProps={{ bdw, bdc, bgc }}
			{...parentProps}
			{...props}
		>
			<FlexItem
				layout={Decorator}
				bd
				pos='r'
				size='0.875em'
				getProps='bdc,bgc,bdw'
				boxcolor={boxcolor}
				{...decoProps}
			/>
			<FlexItem
				bd
				p='box'
				bdrs='l'
				w='fit-content'
				getProps='bdc,bgc,bdw'
				boxcolor={boxcolor}
			>
				{children}
			</FlexItem>
		</ParentComponent>
	);
}
