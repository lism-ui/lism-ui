import { Children, cloneElement } from 'react';
// import { Lism } from '../Lism';
// import { TabContext } from './context';

// import setEvent from "./setEvent";

// animationTime: [s]
export default function TabPanels({ children, tabId, activeIndex }) {
	// const { className, style, attrs } = getLismProps(props, { lismClass: 'l--tab' });

	// console.log('children', children);

	return (
		<div className='l--tab__panels'>
			{Children.map(children, (child, index) => {
				const isActive = activeIndex === index;
				const panelId = `${tabId}-${index}`;
				return cloneElement(child, { key: index, panelId, isActive });
			})}
		</div>
	);
}
