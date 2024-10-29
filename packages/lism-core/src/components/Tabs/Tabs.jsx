import React from 'react';
import { Grid } from '../Grid';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import getTabsProps from './getProps';
import { TabContext } from './context';

export default function Tabs({ uid, defaultIndex, tabProps = {}, children, ...props }) {
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);

	const tabId = uid || React.useId();

	const { tabsProps, listProps, panelProps } = getTabsProps(props);

	const deliverState = {
		tabId,
		activeIndex,
		setActiveIndex,
	};

	const items = [];
	const panels = [];

	// 直下のTabItemを処理する
	React.Children.forEach(children, (child, index) => {
		const childProps = child.props || {};
		const { label, ...itemProps } = childProps;

		// label を持っていなければスキップ
		if (!label) return;

		items.push(
			<Tab key={index} index={index} {...tabProps}>
				{label}
			</Tab>
		);
		panels.push(<TabPanel key={index} index={index} {...itemProps} {...panelProps} />);
		// panels.push(React.cloneElement(child, { key: controlId, panelId: controlId, isActive }));
	});

	return (
		<Grid {...tabsProps}>
			<TabContext.Provider value={deliverState}>
				{items.length === 0 ? (
					// タブが生成できなかった場合（直接TabListなどを子要素に配置する場合）は、そのまま返す
					children
				) : (
					<>
						<TabList {...listProps}>{items}</TabList>
						{panels}
					</>
				)}
			</TabContext.Provider>
		</Grid>
	);
}
