// import React from 'react';
import { Icon } from '../Icon';
import { Flex, FlexItem } from '../Flex';
import { getAccHeadProps, getAccLabelProps, getAccIconProps } from './getProps';

// exProps
export default function AccordionHeader({
	tag = 'span',
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
						<Icon icon={openIcon} class='c--accordion__openIcon ' />
						<Icon icon={closeIcon} class='c--accordion__closeIcon ' />
					</>
				) : (
					<Icon icon={icon} />
				)}
			</FlexItem>
		</Flex>
	);
}
