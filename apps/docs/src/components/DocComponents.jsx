import { Text, Badge } from '@lism-ui/core';

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

export const MemoBadge = ({ children, color = 'orange', ...props }) => {
	return (
		<Badge fz='xs' lh='1' p='5' keycolor={color} {...props}>
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
			bdrs='xs'
			whs='nw'
			isColored
			keycolor={keycolor}
			{...props}
		/>
	);
};
