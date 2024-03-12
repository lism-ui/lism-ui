import getProps from './getProps';
import getLismProps from '../../lib/getLismProps';
import SVG from './SVG';

export default function Icon({ asProps = {}, children, ...props }) {
	// const hasChildren = !!children;

	let { IconComponent, iconTag, iconProps, emoji, otherProps } = getProps(props);

	let TheComponent = IconComponent || iconTag;
	if (TheComponent === 'svg') {
		TheComponent = SVG;
	}

	return (
		<TheComponent {...getLismProps(otherProps)} {...asProps} {...iconProps}>
			{emoji || children}
		</TheComponent>
	);
}
