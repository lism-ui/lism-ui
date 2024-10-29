import React from 'react';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';

export default function TabChildren({
	children,
	// tabId,
	// defaultIndex,
	listProps = {},
	panelProps = {},
	// ...props
}) {
	// const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);
	const items = [];
	const panels = [];
	React.Children.forEach(children, (child, index) => {
		const childProps = child.props || {};
		const { label, ...otherPanelProps } = childProps;

		// const isActive = activeIndex === index;
		// const controlId = `${tabId}-${index}`;

		// label を持っていれば、btn, panelを作成
		if (!label) return;

		items.push(
			<Tab
				key={index}
				index={index}
				// isActive={isActive}
				// onClick={() => setActiveIndex(index)}
				// controlId={controlId}
			>
				{label}
			</Tab>
		);
		panels.push(
			<TabPanel
				key={index}
				index={index}
				// id={controlId}
				// isActive={isActive}
				{...otherPanelProps}
				{...panelProps}
			/>
		);
		// panels.push(React.cloneElement(child, { key: controlId, panelId: controlId, isActive }));
	});

	if (items.length === 0) {
		return children;
	}
	return (
		<>
			<TabList {...listProps}>{items}</TabList>
			{panels}
		</>
	);
}
