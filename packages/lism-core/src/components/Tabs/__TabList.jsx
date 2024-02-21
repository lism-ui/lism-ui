import React from 'react';
import { Lism } from '../Lism';
// import { TabContext } from './context';

// Tabs, TabList, TabBtn, TabPanel, TabPanels
//
export default function Tabs({
	lismClass = {},
	children,
	customTabId,
	defaultIndex,
	keepHeight,
	...props
}) {
	lismClass.c = 'c--tab';

	// エディタ上での開閉状態を管理
	// const [actTab, setActTab] = useState(activeTab);

	const theTabId = React.useId();
	const [activeIndex, setActiveIndex] = React.useState(defaultIndex || 0);
	// const [tabs, setTabs] = useState([]);
	// const [tabId, setTabId] = useState(customTabId || theTabId);
	const tabId = customTabId || theTabId;

	console.log('keepHeight', keepHeight);
	if (keepHeight) {
		props['data-keep-height'] = '1';
	}

	// childrenからタブのラベルとパネルコンテンツを取得

	const items = [];
	const panels = [];

	React.Children.forEach(children, (child, index) => {
		const lebel = child.props?.label || '';

		const isActive = activeIndex === index;
		const controlId = `${tabId}-${index}`;

		items.push(
			<button
				role='tab'
				key={controlId}
				className='c--tab__button'
				onClick={() => setActiveIndex(index)}
				aria-selected={isActive ? 'true' : 'false'}
				aria-controls={controlId}
			>
				{lebel}
			</button>
		);
		panels.push(React.cloneElement(child, { key: controlId, panelId: controlId, isActive }));
	});

	return (
		<Lism lismClass={lismClass} {...props}>
			<div className='c--tab__list' role='tablist'>
				{items}
			</div>
			<div className='c--tab__panels'>{panels}</div>
		</Lism>
	);
}
