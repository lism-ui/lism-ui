// import React from 'react';
import { Lism } from '../Lism';
import { Stack, SideFlex } from '../Flex';

// isFlow は ddに渡す
export default function TermListRow({
	lismClass = {},
	mode = 'stack',
	term,
	isFlow,
	dtProps = {},
	ddProps = {},
	children,
	...props
}) {
	lismClass.c = 'c--termList__row';

	let defaultProps = {};
	let Component = Lism;
	let dtClass = 'c--termList__dt';
	if (mode === 'stack') {
		Component = Stack;
		defaultProps = { gap: 10 };
		ddProps = Object.assign({ mis: 30 }, ddProps);
	} else if (mode === 'fluid') {
		Component = SideFlex;
		defaultProps = { side: 'first', gap: 10 };
		ddProps = Object.assign({ mis: 30 }, ddProps);
	}
	return (
		<Component lismClass={lismClass} {...defaultProps} {...props}>
			<Lism skipState tag='dt' fw='bold' className={dtClass} {...dtProps}>
				{term}
			</Lism>
			<Lism tag='dd' className='c--termList__dd' isFlow={isFlow} {...ddProps}>
				{children}
			</Lism>
		</Component>
	);
}
