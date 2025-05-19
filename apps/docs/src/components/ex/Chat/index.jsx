import React from 'react';
import { Lism, GridItem, Grid, Frame, Media, Decorator } from '@lism-ui/core';

export function Chat({
	variant = 'speak',
	direction = 'start',
	name,
	avatar,
	isFlow = true,
	children,
	keycolor = 'gray',
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
				<Frame
					lismClass='c--chat__avatar'
					isSide
					src={avatar}
					alt=''
					bgc='base'
					ar='1/1'
					bdrs='99'
					aria-hidden='true'
				>
					<Media src={avatar} alt='' width='60' height='60' decoding='async' />
				</Frame>
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
						lismClass='c--chat__deco u--colored'
						lismState={['has--mask u--skipFlow']}
						pos='a'
						insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
						scale={direction === 'start' ? '' : '-X'}
					/>
				)}
				<Lism
					lismClass='c--chat__content u--colored u--trimHL'
					bdrs='4'
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
