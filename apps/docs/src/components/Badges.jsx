import { Badge } from '@lism-ui/core';

export const MemoBadge = ({ children, color = 'orange', ...props }) => {
	return (
		<Badge fz='xs' lh='1' p='5' variant='subtle' keycolor={color} {...props}>
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
			fz='xs'
			ff='mono'
			lh='xs'
			px='5'
			m='5'
			whs='nw'
			// d='if'
			variant='subtle'
			keycolor={keycolor}
			{...props}
		/>
	);
};
