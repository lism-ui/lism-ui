import atts from '../../lib/helper/atts';

export default function getBadgeProps({ lismClass, variant, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, 'b--badge', variant && `b--badge--${variant}`),
		tag: 'span',
		d: 'inline-flex', //  文中でもpaddingが効くように
		bdrs: '1',
		px: '20',
		skipState: true,
	};
	// if (props?.icon) {
	// 	defaultProps.g = '5';
	// 	defaultProps.ai = 'center';
	// }

	return Object.assign(defaultProps, props);
}
