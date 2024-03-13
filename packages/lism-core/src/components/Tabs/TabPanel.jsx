import React from 'react';
import { GridItem } from '../Grid';
import { TabContext } from './context';
import { getTabPanelProps } from './getProps';

export default function TabPanel({ index = 0, ...props }) {
	const { tabId, activeIndex } = React.useContext(TabContext);
	const isActive = activeIndex === index;
	const controlId = `${tabId}-${index}`;

	return <GridItem id={controlId} {...getTabPanelProps(props, isActive)} />;
}
