import React from 'react';
import { Lism } from '../Lism';
import { TabContext } from './context';
import { getTabProps } from './getProps';

export default function Tab({ index = 0, ...props }) {
	const { tabId, activeIndex, setActiveIndex } = React.useContext(TabContext);

	const isActive = activeIndex === index;
	const controlId = `${tabId}-${index}`;

	return (
		<Lism
			onClick={() => setActiveIndex(index)}
			aria-controls={controlId}
			{...getTabProps(props, isActive)}
		/>
	);
}
