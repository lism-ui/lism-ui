// import React from 'react';
import { Lism } from '../Lism';
import { Accordion } from '../Accordion';
import NavMenuLink from './NavMenuLink';
import { getNavMenuProps } from './getProps';

export default function NavMenu({ isAcc, children, ...props }) {
	const { liProps, linkProps } = getNavMenuProps(props);

	return (
		<Lism {...liProps}>
			{isAcc ? (
				<Accordion>{children}</Accordion>
			) : (
				<>{linkProps ? <NavMenuLink {...linkProps}>{children}</NavMenuLink> : children}</>
			)}
		</Lism>
	);
}
