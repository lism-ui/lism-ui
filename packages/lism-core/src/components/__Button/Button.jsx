import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { getProps } from './getProps';

// variant
export default function Button({ layout, children, ...props }) {
	const Layout = layout || Lism;

	return (
		<Layout {...getProps(props)}>
			{children}
			{/* {icon && <Icon className='b--button__icon' icon={icon} scale={iconScale} />}
			{children && <Lism {...textProps}>{children}</Lism>}
			{endIcon && <Icon className='b--button__icon' icon={endIcon} scale={iconScale} />} */}
		</Layout>
	);
}
