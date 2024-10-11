import atts from '../../lib/helper/atts';
import { mergeFlexContextProps } from '../Flex/getProps';

export default function getBadgeProps({ lismClass, variant, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, 'b--badge', variant && `b--badge--${variant}`),
		tag: 'span',
		skipState: true,
		isColored: variant === 'subtle',
	};
	// if (icon) {
	// 	defaultProps.d = 'inline-flex';
	// 	defaultProps.ai = 'center';
	// }

	return Object.assign(defaultProps, mergeFlexContextProps(props));
}
