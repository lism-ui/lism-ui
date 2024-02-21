// import React from 'react';
import { Lism } from '../Lism';
import { Stack, SideFlex } from '../Flex';

// isFlow は ddに渡す
export default function TermListRow({
	lismClass = {},
	isFlex,
	term,
	isFlow,
	dtProps = {},
	ddProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--termList__row';

	let Component = null;
	let defaultProps = {};

	if (isFlex) {
		Component = SideFlex;
		defaultProps = { side: 'first', sideW: '10rem', fluidMinW: '15rem' };
	} else {
		Component = Stack;
		defaultProps = {};
	}

	return (
		<Component lismClass={lismClass} {...defaultProps} {...props}>
			<Lism skipState tag='dt' fw='bold' lismClass={{ c: 'c--termList__dt' }} {...dtProps}>
				{term}
			</Lism>
			<Lism tag='dd' lismClass={{ c: 'c--termList__dd' }} isFlow={isFlow} {...ddProps}>
				{children}
			</Lism>
		</Component>
	);
}
