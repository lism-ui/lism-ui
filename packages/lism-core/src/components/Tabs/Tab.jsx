import React from 'react';
import { FlexItem } from '../Flex';
import { TabContext } from './context';
import { getTabProps } from './getProps';

export default function Tab({ index = 0, ...props }) {
	const { tabId, activeIndex, setActiveIndex } = React.useContext(TabContext);

	const isActive = activeIndex === index;
	const controlId = `${tabId}-${index}`;

	return (
		<FlexItem
			onClick={() => setActiveIndex(index)}
			aria-controls={controlId}
			{...getTabProps(props, isActive)}
		/>
	);
}
