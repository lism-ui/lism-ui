import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { getIconButtonProps } from './getProps';

export default function Button({ icon, children, ...props }) {
	// children でアイコン配置する場合→ c--button__icon 必須

	return (
		<Flex skipState tag='a' {...getIconButtonProps(props)}>
			{children || <Icon icon={icon} lismClass={{ c: 'c--button__icon' }} />}
		</Flex>
	);
}
