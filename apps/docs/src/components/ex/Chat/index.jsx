import React from 'react';
import { Lism, GridItem, Grid, Frame, Media, Decorator } from '@lism-ui/core';
import './style.scss';

export default function Chat({
	variant = 'speak',
	direction = 'start',
	name,
	avatar,
	isFlow,
	keycolor = 'gray',
	children,
	...props
}) {
	// let lismClass = `c--chat`;
	// if (variant) lismClass += ` c--chat--${variant}`;

	return (
		<Grid
			lismClass='c--chat'
			variant={variant}
			keycolor={keycolor}
			bg='none'
			data-chat-direction={direction}
			ji={direction}
			{...props}
		>
			{avatar && (
				<GridItem
					layout={Frame}
					lismClass='c--chat__avatar'
					src={avatar}
					alt=''
					bgc='base'
					ar='1/1'
					bdrs='99'
					aria-hidden='true'
				>
					<Media src={avatar} alt='' width='60' height='60' decoding='async' />
				</GridItem>
			)}
			{name && (
				<GridItem
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
				</GridItem>
			)}
			<GridItem lismClass='c--chat__body' pos='r'>
				<Decorator
					lismClass='c--chat__deco'
					className='u--colored u--skipFlow'
					hasMask
					pos='a'
					insets={direction === 'start' ? { ie: '100%' } : { is: '100%' }}
					scale={direction === 'start' ? '' : '-X'}
				/>
				<Lism
					lismClass='c--chat__content'
					className='u--colored u--trimHL'
					bdrs='4'
					p='30'
					isFlow={isFlow}
					jslf={direction}
				>
					{children}
				</Lism>
			</GridItem>
		</Grid>
	);
}
