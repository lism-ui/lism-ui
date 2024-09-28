import { Stack } from '../Stack';
import { Flex } from '../Flex';
import { getNavMenuProps } from './getProps';

export default function NavMenu({ children, isFlex, ...props }) {
	const JSX = isFlex ? Flex : Stack;

	return (
		<JSX {...getNavMenuProps(props)} {...props}>
			{children}
		</JSX>
	);
}
