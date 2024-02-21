// import React from 'react';
import { LayoutContext } from '../contexts';
import { Lism } from '../Lism';

const LismProvider = ({ component, itemProps, children, ...props }) => {
	const Component = component || Lism;
	return (
		<Component {...props}>
			<LayoutContext.Provider value={itemProps}>{children}</LayoutContext.Provider>
		</Component>
	);
};
export default LismProvider;
