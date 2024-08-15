// import React from 'react';
import { Lism } from '../Lism';
import NavMenuLink from './NavMenuLink';
import { getNavMenuItemProps } from './getProps';

export default function NavMenuItem({ children, ...props }) {
	const { liProps, linkProps } = getNavMenuItemProps(props);

	return (
		<Lism {...liProps}>
			{linkProps ? <NavMenuLink {...linkProps}>{children}</NavMenuLink> : children}
		</Lism>
	);
}
