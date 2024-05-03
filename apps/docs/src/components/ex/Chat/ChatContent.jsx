import React from 'react';
import { Lism } from '../Lism';
import { Decorator } from '../Decorator';
// import { ChatContext } from './context';
import { getDecoProps, getContentProps } from './getProps';

export default function ChatContent({
	direction = 'start',
	variant = 'speak',
	isFlow,
	contentProps = {},
	children,
	...props
}) {
	let decorator = null;
	if ('speak' === variant || 'think' === variant) {
		decorator = <Decorator {...getDecoProps(direction, variant)} />;
	}

	return (
		<Lism _lismClass={['c--chat__body']} {...props}>
			{decorator}
			<Lism
				_lismClass={['c--chat__content']}
				isFlow={isFlow}
				{...getContentProps(direction, variant, contentProps)}
			>
				{children}
			</Lism>
		</Lism>
	);
}
