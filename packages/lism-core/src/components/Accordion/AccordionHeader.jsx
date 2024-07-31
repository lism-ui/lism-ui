// import React from 'react';
import { Icon } from '../Icon';
import { Flex, FlexItem } from '../Flex';
import { getAccHeadProps, getAccLabelProps, getAccIconProps } from './getProps';

// exProps
export default function AccordionHeader({
	tag,
	icon = 'caret-down',
	openIcon,
	closeIcon,
	trigger,
	children,
	...props
}) {
	return (
		<Flex tag='summary' {...getAccHeadProps(props)}>
			<FlexItem {...getAccLabelProps(tag)}>{children}</FlexItem>
			<FlexItem {...getAccIconProps(trigger)}>
				{openIcon ? (
					<>
						<Icon icon={openIcon} class='b--accordion__iconOpen ' />
						<Icon icon={closeIcon} class='b--accordion__iconClose ' />
					</>
				) : (
					<Icon icon={icon} />
				)}
			</FlexItem>
		</Flex>
	);
}
