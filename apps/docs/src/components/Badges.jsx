import { Badge } from '@lism-ui/core';

export const MemoBadge = ({ children, color = 'orange', ...props }) => {
	return (
		<Badge fz='11px' lh='1' p='em3' variant='subtle' boxcolor={color} {...props}>
			{children}
		</Badge>
	);
};
export const PropBadge = ({ type = '', ...props }) => {
	let boxcolor = 'blue';
	if (type === 'attr') {
		boxcolor = 'green';
	} else if (type === 'cssvar') {
		boxcolor = 'purple';
	}
	return (
		<Badge
			fz='xs'
			ff='mono'
			lh='1'
			p='em2'
			m='em2'
			whs='nw'
			// d='if'
			variant='subtle'
			boxcolor={boxcolor}
			{...props}
		/>
	);
};
