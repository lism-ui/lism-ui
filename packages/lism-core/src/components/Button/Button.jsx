import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { getButtonProps } from './getProps';
import { separateLinkProps } from '../../lib';

// variant
export default function Button({ leftIcon, rightIcon, children, ...props }) {
	const { linkProps, otherProps } = separateLinkProps(props);
	const { btnProps, textProps } = getButtonProps(otherProps);
	const BtnComponent = props.isGrid ? Grid : Flex;

	return (
		<BtnComponent skipState tag='a' {...linkProps} {...btnProps}>
			{leftIcon && <Icon className='c--button__leftIcon' icon={leftIcon} />}
			<Lism skipState tag='span' lismClass={['c--button__text']} {...textProps}>
				{children}
			</Lism>
			{rightIcon && <Icon className='c--button__leftIcon' icon={rightIcon} />}
		</BtnComponent>
	);
}
