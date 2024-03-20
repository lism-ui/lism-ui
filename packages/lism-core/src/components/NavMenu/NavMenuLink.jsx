// import React from 'react';
import { Flex } from '../Flex';
import { AccordionHeader } from '../Accordion';
import { getNavMenuLinkProps } from './getProps';

export default function NavMenuLink({ isAccHead, children, ...props }) {
	const accTrigger = props?.href ? 'icon' : '';

	if (isAccHead) {
		return (
			<AccordionHeader
				p={null}
				py={0}
				pis='0'
				minH='0'
				gap='em2'
				consume='p'
				trigger={accTrigger}
			>
				<Flex {...getNavMenuLinkProps(props)}>{children}</Flex>
			</AccordionHeader>
		);
	}
	return <Flex {...getNavMenuLinkProps(props)}>{children}</Flex>;
}
