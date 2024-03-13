import React from 'react';
import { GridItem } from '../Grid';
import { TabContext } from './context';

export default function TabPanel({
	lismClass = {},
	index = 0,
	//isActive,
	...props
}) {
	lismClass.c = 'c--tabs__panel';

	const { tabId, activeIndex } = React.useContext(TabContext);
	const isActive = activeIndex === index;
	const controlId = `${tabId}-${index}`;

	return (
		<GridItem
			id={controlId}
			lismClass={lismClass}
			role='tabpanel'
			aria-hidden={isActive ? 'false' : 'true'}
			{...props}
		/>
	);
}
