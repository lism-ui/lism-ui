import React from 'react';
import { Lism, GridItem, Grid, Avatar, Decorator } from '@lism-ui/core';

export function Chat({
	variant = 'speak',
	direction = 'start',
	name,
	avatar,
	isFlow = 's',
	children,
	keycolor,
	...props
}) {
	let lismClass = `c--chat`;
	if (variant) lismClass += ` c--chat--${variant}`;
	let Layout = Grid;

	return (
		<Layout
			lismClass={lismClass}
			keycolor={keycolor}
			bg='none'
			data-chat-direction={direction}
			ji={direction}
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
						isColored
						pos='a'
						insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
						scale={direction === 'start' ? '' : '-X'}
					/>
				)}
				<Lism
					lismClass='c--chat__content'
					lismState={['is--trimHL']}
					isColored
					bdrs='l'
					p='30'
					isFlow={isFlow}
					jslf={direction}
				>
					{children}
				</Lism>
			</GridItem>
		</Layout>
	);
}
