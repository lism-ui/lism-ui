import React from 'react';
// import { Icon } from '../Icon';
import { Flex } from '../Flex';
import AccordionLabel from './AccordionLabel';
import AccordionIcon from './AccordionIcon';
import { getAccHeadProps } from './getProps';

// import { AccContext } from './context';

// asProps
export default function AccordionHeader({ isFreeMode, tag, icon, trigger, children, ...props }) {
	// const { trigger } = React.useContext(AccContext);

	// childrenの有無で分かれる
	return (
		<Flex tag='summary' ai='center' {...getAccHeadProps(props)}>
			{isFreeMode ? (
				children
			) : (
				<>
					<AccordionLabel tag={tag}>{children}</AccordionLabel>
					<AccordionIcon icon={icon} isTrigger={trigger === 'icon'} />
				</>
			)}
		</Flex>
	);
}
