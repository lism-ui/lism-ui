import React from 'react';
import { Grid } from '../Grid';
// import { Stack } from '../Flex';
import TabChildren from './TabChildren';
import getTabProps from './getProps';
import { TabContext } from './context';

// import { TabContext } from './context';

// Tabs, TabList, TabBtn, TabPanel, TabPanels
//
export default function Tabs({
	lismClass = {},
	variant = 'line',
	// type = 'line',
	// isVertical,
	// keepHeight,
	uuid,
	defaultIndex,
	children,
	...props
}) {
	lismClass.c = 'c--tabs';
	variant && (lismClass.c += ` c--tabs--${variant}`);
	// isVertical && (lismClass.c += ' c--tabs--vertical');

	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);

	const tabId = uuid || React.useId();

	const { tabProps, listProps, panelProps } = getTabProps(props, variant);
	// if ('Stack' === listProps.as) {
	// 	listProps.as = Stack;
	// }

	const deliverState = {
		tabId,
		// defaultIndex,
		activeIndex,
		setActiveIndex,
	};

	return (
		<Grid lismClass={lismClass} gap='em10' {...tabProps}>
			<TabContext.Provider value={deliverState}>
				<TabChildren
					// tabId={tabId}
					// defaultIndex={defaultIndex}
					listProps={listProps}
					panelProps={panelProps}
				>
					{children}
				</TabChildren>
			</TabContext.Provider>
		</Grid>
	);
}
