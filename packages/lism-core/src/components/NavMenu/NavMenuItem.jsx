// import React from 'react';
import { Lism } from '../Lism';
// import NavMenuLink from './NavMenuLink';
import { getNavMenuItemProps } from './getProps';

export default function NavMenuItem({ children, ...props }) {
	const itemProps = getNavMenuItemProps(props);

	return <Lism {...itemProps}>{children}</Lism>;
}
