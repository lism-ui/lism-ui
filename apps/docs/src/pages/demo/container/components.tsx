import React from 'react';

import { Lism, Layer, Text, Flex } from '@lism-ui/core';

export function AttsLabels({ atts = '', ...props }) {
	// attsを , で分割
	const attsArray = atts.split(',') || [];
	return (
		<Flex
			className='c--attsLabels u--skipFlow'
			w='100%'
			maxW='100%'
			jc='c'
			pos='a'
			t='0'
			l='0'
			ta='c'
			lh='1'
			mt='-1.1em'
			ov='h'
			z='1'
			{...props}
		>
			{attsArray.map((att) => (
				<TipCode key={att} text={att} />
			))}
		</Flex>
	);
}

export function TipCode({
	text = '',
	color = 'gray',
	children,
	...props
}: {
	text?: string;
	color?: string;
	children?: React.ReactNode;
	[key: string]: any;
}): JSX.Element {
	// <TipCode text='is--container' color='orange' />

	// text が "container:" を含むかどうかを判定
	if (text.includes('container:') || text.includes('data-content-size')) {
		color = 'blue';
	} else if (text.includes('container')) {
		color = 'green';
	} else if (text.includes('flow')) {
		color = 'orange';
	} else if (text.includes('gutter')) {
		color = 'purple';
	}

	return (
		<Lism
			tag='code'
			bd
			d='if'
			fz='s'
			lh='xs'
			px='10'
			m='5'
			bdrs='1'
			whs='nw'
			// isColored
			className='u--colored'
			keycolor={color}
			{...props}
		>
			{text || children}
		</Lism>
	);
}

export function GutterGuide(props?: any) {
	return <Layer className='has--gutterGuide' mbs='0' />;
}

export function WideContent(props: any) {
	const { children, ...atts } = props;
	return (
		<Lism isWide ta='c' bg='u:stripe' bgc='yellow:12%' {...atts}>
			<TipCode text='is--wide' color='yellow' m='5' />
			{children}
		</Lism>
	);
}

export function FullwideContent(props: any) {
	const { children, ...atts } = props;
	return (
		<Lism isFullwide ta='c' bg='u:stripe' bgc='orange:12%' {...atts}>
			<TipCode text='is--fullwide' color='orange' m='5' />
			{children}
		</Lism>
	);
}

export function Overwide(props: any) {
	const { children, ...atts } = props;
	return (
		<Lism isOverwide ta='c' bg='u:stripe' bgc='pink:12%' {...atts}>
			<TipCode text='Overwide' color='pink' m='5' />
			{children}
		</Lism>
	);
}
export function LoremContent(props: any) {
	const { children, ...atts } = props;
	return (
		<Text py='5' px='10' bg='u:stripe' bgc='gray:4%' {...atts}>
			Lorem content ...
		</Text>
	);
}
