import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { getButtonProps } from './getProps';

// variant
export default function Button({ layout, icon, endIcon, iconScale, children, ...props }) {
	const { btnProps, textProps } = getButtonProps(props);
	const BtnComponent = layout || Flex;

	return (
		<BtnComponent {...btnProps}>
			{icon && <Icon className='b--button__icon' icon={icon} scale={iconScale} />}
			{children && <Lism {...textProps}>{children}</Lism>}
			{endIcon && <Icon className='b--button__icon' icon={endIcon} scale={iconScale} />}
		</BtnComponent>
	);
}
