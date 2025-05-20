// import React from 'react';
import { Flex } from '../Flex';
import { getNavMenuLinkProps } from './getProps';

export default function NavMenuLink({ children, ...props }) {
	return <Flex {...getNavMenuLinkProps(props)}>{children}</Flex>;
}
