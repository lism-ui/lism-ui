import React from 'react';
import { Lism, FlexItem, Flex, Stack, WithSide, Grid, Avatar, Decorator } from '@lism-ui/core';

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
	layout,
	...props
}) {
	let lismClass = `c--chat`;
	if (variant) lismClass += ` c--chat--${variant}`;
	// if (direction === 'end') lismClass += ' c--chat--end';

	let Layout = Flex;
	if (variant === 'box') {
		Layout = WithSide;
		props.sidePosition = `${direction} start`;
	} else {
		props.fxd = direction === 'end' ? 'row-reverse' : '';
	}

	return (
		<Layout
			lismClass={lismClass}
			boxcolor={boxcolor}
			bg='none'
			data-chat-direction={direction}
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
					jslf={direction}
				/>
			)}
			{/* l--grid--overlap */}
			<FlexItem layout={Grid} lismClass='c--chat__body' pos='r' fx='1'>
				{name && (
					<Lism
						lismClass='c--chat__name'
						c='content-3'
						fs='i'
						fz='2xs'
						lh='1'
						py='5'
						px='10'
						aslf='e'
						// jslf={direction === 'end' ? 'start' : 'end'}
						jslf={direction}
						// gridItem={{ gr: '1' }}
					>
						{name}
					</Lism>
				)}
				<Lism
					lismClass='c--chat__content'
					pos='r'
					// gridItem={{ gr: '2', gc: '1' }}
					bgc
					bdrs='l'
					p='box'
					// p='20'
					isFlow={isFlow}
					jslf={direction}
					// {...getContentProps(direction, variant)}
				>
					{variant !== 'box' && (
						<Decorator
							lismClass='c--chat__deco'
							lismState={['has--mask is--skipFlow']}
							bgc
							// gridItem={{ gr: '2', gc: '1' }}
							pos='a'
							// t='0'
							insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
							// jslf={direction}
							scale={direction === 'start' ? '' : '-X'}
							uClass='-fxsh:0'
							// {...getDecoProps(direction, variant)}
						/>
					)}
					{children}
				</Lism>

				{/* {footer && (
					<Lism
						lismClass='c--chat__footer'
						fz='2xs'
						lh='xs'
						px='5'
						c='content-3'
						fs='i'
						aslf={direction === 'end' ? 'start' : 'end'}
						// gridItem={{ gr: '3' }}
					>
						{footer}
					</Lism>
				)} */}
			</FlexItem>
		</Layout>
	);
}
