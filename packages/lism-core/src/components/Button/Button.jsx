import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { getButtonProps } from './getProps';

// variant
export default function Button({ leftIcon, rightIcon, children, ...props }) {
	const { btnProps, textProps } = getButtonProps(props);
	const BtnComponent = props.isGrid ? Grid : Flex;

	return (
		<BtnComponent {...btnProps}>
			{leftIcon && <Icon className='c--button__leftIcon' icon={leftIcon} />}
			<Lism {...textProps}>{children}</Lism>
			{rightIcon && <Icon className='c--button__leftIcon' icon={rightIcon} />}
		</BtnComponent>
	);
}
