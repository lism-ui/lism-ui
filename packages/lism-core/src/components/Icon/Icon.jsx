import getProps from './getProps';
import getLismProps from '../../lib/getLismProps';
import SVG from './SVG';

export default function Icon({ passProps = {}, children, ...props }) {
	const hasChildren = !!children;

	let { IconTag, iconProps, otherProps } = getProps(props, hasChildren);
	if (IconTag === '_SVG_') IconTag = SVG;

	return (
		<IconTag {...getLismProps(otherProps)} {...passProps} {...iconProps}>
			{children}
		</IconTag>
	);
}
