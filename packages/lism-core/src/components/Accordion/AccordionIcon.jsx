import React from 'react';
import { FlexItem } from '../Flex';
import { Icon } from '../Icon';
import { getAccIconProps } from './getProps';

export default function AccordionIcon({
	icon = 'accordion-toggle',
	size,
	iconProps = {},
	children,
	...props
}) {
	// children優先
	return (
		<FlexItem {...getAccIconProps(props)}>
			{children || <Icon icon={icon} size={size} {...iconProps} />}
		</FlexItem>
	);
}
