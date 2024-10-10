import React from 'react';
import { Lism, GridItem, Flex, Stack, WithSide, Grid, Avatar, Decorator } from '@lism-ui/core';

// function getContentProps(direction, variant) {
// 	const returnProps = {};
// 	if ('speak' === variant && direction === 'start') {
// 		returnProps.radii = { ss: 0 };
// 	} else if ('speak' === variant && direction === 'end') {
// 		returnProps.radii = { se: 0 };
// 	}

// 	return returnProps;
// }

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
	let lismClass = `c--chat`;
	if (variant) lismClass += ` c--chat--${variant}`;
	let Layout = Grid;

	return (
		<Layout
			lismClass={lismClass}
			boxcolor={boxcolor}
			bg='none'
			data-chat-direction={direction}
			ji={direction}
			// {...getProps(direction, variant)}
			{...props}
		>
			{avatar && (
				<Avatar
					lismClass='c--chat__avatar'
					isSide
					src={avatar}
					alt=''
					bgc='base'
					bdrs='full'
					width='60'
					height='60'
					aria-hidden='true'
				/>
			)}
			{name && (
				<Lism
					lismClass='c--chat__name'
					c='text-2'
					fs='i'
					fz='2xs'
					lh='1'
					py='5'
					px='10'
					aslf='e'
				>
					{name}
				</Lism>
			)}
			<GridItem lismClass='c--chat__body' pos='r'>
				{variant !== 'box' && (
					<Decorator
						lismClass='c--chat__deco'
						lismState={['has--mask is--skipFlow']}
						bgc
						pos='a'
						// t='0'
						insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
						scale={direction === 'start' ? '' : '-X'}
						// {...getDecoProps(direction, variant)}
					/>
				)}
				<Lism
					lismClass='c--chat__content is--trimHL'
					bgc
					bdrs='l'
					p='30'
					isFlow={isFlow}
					jslf={direction}
				>
					{children}
				</Lism>

				{/* {footer && (
					<Lism
						lismClass='c--chat__footer'
						fz='2xs'
						lh='xs'
						px='5'
						c='text-2'
						fs='i'
						aslf={direction === 'end' ? 'start' : 'end'}
						// gridItem={{ gr: '3' }}
					>
						{footer}
					</Lism>
				)} */}
			</GridItem>
		</Layout>
	);
}
