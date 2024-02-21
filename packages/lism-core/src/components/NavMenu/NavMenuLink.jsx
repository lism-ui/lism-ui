// import React from 'react';
import { Flex } from '../Flex';

export default function navMenu__link({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--navMenu__link';
	let tag = 'span';

	if (props.href) {
		tag = 'a';
		if (!props.hover) props.hover = '-';
	}

	return (
		<Flex tag={tag} lismClass={lismClass} ai='center' consume='p' {...props}>
			{children}
		</Flex>
	);
}
