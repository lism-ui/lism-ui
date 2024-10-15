import { Text, Callout, Badge } from '@lism-ui/core';
import {
	// Book as Book,
	Notebook as Book,
	// BookOpenText as Book,
	// BookBookmark as Book,
} from '@phosphor-icons/react';

export const HelpText = ({ tag = 'p', children, ...props }) => {
	const _props = { tag, c: 'text-2', lh: 's', fz: 's' };
	if (tag === 'small') {
		_props.d = 'b';
		_props.fz = 'xs';
	} else {
		_props.mbs = '20';
	}
	return (
		<Text {..._props} {...props}>
			{children}
		</Text>
	);
};
export function Reference({ children }) {
	return (
		<Callout icon={Book} keycolor='purple'>
			{children}
		</Callout>
	);
}

export const MemoBadge = ({ children, color = 'orange', ...props }) => {
	return (
		<Badge fz='s' lh='1' p='5' isColored keycolor={color} {...props}>
			{children}
		</Badge>
	);
};
export const PropBadge = ({ type = '', ...props }) => {
	let keycolor = 'blue';
	if (type === 'attr') {
		keycolor = 'green';
	} else if (type === 'cssvar') {
		keycolor = 'purple';
	}
	return (
		<Badge
			variant='prop'
			fz='xs'
			ff='mono'
			lh='xs'
			m='5'
			bdrs='1'
			whs='nw'
			isColored
			keycolor={keycolor}
			{...props}
		/>
	);
};
