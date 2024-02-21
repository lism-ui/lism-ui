import React from 'react';
// import { Icon } from '../Icon';
import { Flex } from '../Flex';
import AccordionLabel from './AccordionLabel';
import AccordionIcon from './AccordionIcon';
import { getAccHeadProps } from './getProps';

// import { AccContext } from './context';

// asProps
export default function AccordionHeader({ label, icon, children, ...props }) {
	// const { trigger } = React.useContext(AccContext);

	// childrenの有無で分かれる
	return (
		<Flex tag='summary' ai='center' {...getAccHeadProps(props)}>
			{children ? (
				children
			) : (
				<>
					<AccordionLabel>{label || ''}</AccordionLabel>
					<AccordionIcon icon={icon} />
				</>
			)}
		</Flex>
	);
}
