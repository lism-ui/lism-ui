import { FlexItem } from '../Flex';
import { Icon } from '../Icon';
import { getAccIconProps } from './getProps';

export default function AccIcon({ icon = 'caret-down', viewBox, children = null, ...props }) {
	return (
		<FlexItem {...getAccIconProps(props)}>
			{children || <Icon viewBox={viewBox} icon={icon} />}
		</FlexItem>
	);
}