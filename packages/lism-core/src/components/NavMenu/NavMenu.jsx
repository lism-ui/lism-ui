import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { getNavMenuProps } from './getProps';

export default function NavMenu({ children, isFlex, ...props }) {
	const JSX = isFlex ? Flex : Lism;

	return (
		<JSX {...getNavMenuProps(props)} {...props}>
			{children}
		</JSX>
	);
}
