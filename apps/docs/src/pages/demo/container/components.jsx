import { Box, Badge, Text } from '@lism-ui/core';

export function TipCode({ text, children, color = 'gray', ...props }) {
	// <TipCode text='is--container' color='orange' />

	// text が "container:" を含むかどうかを判定
	if (text.includes('container:')) {
		color = 'blue';
	} else if (text.includes('container')) {
		color = 'orange';
	} else if (text.includes('flow')) {
		color = 'green';
	} else if (text.includes('gutter')) {
		color = 'purple';
	}

	return (
		<Badge tag='code' fz='s' lh='1' d='ib' m='5' variant='subtle' boxcolor={color} {...props}>
			{text || children}
		</Badge>
	);
}

export function AlignWide({ children, ...props }) {
	return (
		<Box isWide ta='c' bg='stripe' bgc='yellow:10%' {...props}>
			<TipCode text='is--wide' color='yellow' m='5' />
			{children}
		</Box>
	);
}

export function AlignFull({ children, ...props }) {
	return (
		<Box isFullwide ta='c' bg='stripe' bgc='pink:10%' {...props}>
			<TipCode text='is--fullwide' color='pink' m='5' />
			{children}
		</Box>
	);
}

export function Overwide({ children, ...props }) {
	return (
		<Box isOverwide ta='c' bg='stripe' bgc='red:10%' {...props}>
			<TipCode text='Overwide' color='red' m='5' />
			{children}
		</Box>
	);
}
export function LoremContent({ ...props }) {
	return (
		<Text py='5' px='10' bg='stripe' bd bdc='table' {...props}>
			Lorem text ...
		</Text>
	);
}
