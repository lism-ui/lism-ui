import React from 'react';
import { Lism, Grid, Flex, Avatar, Decorator } from '@lism-ui/core';

function getProps(direction, variant) {
	if (direction === 'start') {
		return {
			// gt: 'fix:l',
			ji: 'start',
			ai: 'start',
		};
	} else {
		return {
			// gt: 'fix:r',
			ji: 'end',
			ai: 'start',
		};
	}
}
function getContentProps(direction, variant) {
	const returnProps = {};
	if ('speak' === variant && direction === 'start') {
		returnProps.radii = { ss: 0 };
	} else if ('speak' === variant && direction === 'end') {
		returnProps.radii = { se: 0 };
	}

	return returnProps;
}

function getDecoProps(direction, variant) {
	const DECORATOR_PROPS = {
		start: {
			insets: { ie: '100%' },
		},
		end: {
			insets: { is: '100%' },
			scale: '-1 1',
		},
	};

	return {
		...DECORATOR_PROPS[direction],
	};
}

export function Chat({
	variant = 'speak',
	direction = 'start',
	name,
	avatar,
	footer,
	isFlow = 's',
	children,
	boxcolor = '-',
	...props
}) {
	let lismClass = `c--chat c--chat--${direction}`;
	if (variant) lismClass += ` c--chat--${variant}`;

	// const contextData = { direction, variant };
	return (
		// <ChatContext.Provider value={contextData}>
		<Grid
			lismClass={lismClass}
			boxcolor={boxcolor}
			bg='none'
			{...getProps(direction, variant)}
			{...props}
		>
			{name && (
				<Lism lismClass='c--chat__name' fz='2xs' lh='xs' px='5' c='text-2' aslf='e'>
					{name}
				</Lism>
			)}
			{avatar && (
				<Avatar
					lismClass='c--chat__avatar'
					src={avatar}
					alt=''
					bgc='base'
					bdrs='full'
					width='60'
					height='60'
					aria-hidden='true'
				/>
			)}
			<Lism lismClass='c--chat__body' pos='r'>
				<Decorator
					lismState={['has--mask']}
					bgc
					pos='a'
					top='0'
					insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
					scale={direction === 'start' ? '' : '-X'}
					uClass='-fxsh:0'
					// {...getDecoProps(direction, variant)}
				/>
				<Lism
					lismClass='c--chat__content'
					bgc
					bdrs='l'
					p='30'
					isFlow={isFlow}
					{...getContentProps(direction, variant)}
				>
					{children}
				</Lism>
			</Lism>
			{/* <ChatContent {...bodyProps}>{children}</ChatContent> */}
			{footer && (
				<Lism lismClass='c--chat__footer' fz='2xs' lh='xs' px='5' c='text-2' fs='i'>
					{footer}
				</Lism>
			)}
		</Grid>
		// </ChatContext.Provider>
	);
}
