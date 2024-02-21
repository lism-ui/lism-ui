import { useContext } from 'react';
import { LayoutContext } from '../contexts';
import { Box, LinkBox } from '../index';
// import classnames from "classnames";

const LismConsumer = ({ component, ...props }) => {
	let Component = 'div';
	if (component) {
		Component = component;
	} else if (props.href) {
		Component = LinkBox;
	} else {
		Component = Box;
	}

	const context = useContext(LayoutContext) || {};
	const { ...itemProps } = context;
	const childProps = {
		...itemProps,
		...props,
	};
	return <Component {...childProps} />;
};

export default LismConsumer;
