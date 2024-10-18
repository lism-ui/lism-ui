import { Stack } from '../Stack';
import { getNavMenuProps } from './getProps';

export default function NavMenu({ children, layout, ...props }) {
	const Layout = layout || Stack;

	return (
		<Layout {...getNavMenuProps(props)} {...props}>
			{children}
		</Layout>
	);
}
