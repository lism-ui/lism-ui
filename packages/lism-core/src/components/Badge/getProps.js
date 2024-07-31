import { mergeFlexContextProps } from '../Flex/getProps';

export default function getBadgeProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('b--badge');
	if (variant) _lismClass.push(`b--badge--${variant}`);

	const defaultProps = {
		_lismClass,
		tag: 'span',
		skipState: true,
		boxcolor: '-',
		// bdrs: 'xs',
		// fz: 'xs',
		// px: '10',
	};
	// if (icon) {
	// 	defaultProps.d = 'inline-flex';
	// 	defaultProps.ai = 'center';
	// }

	return Object.assign(defaultProps, mergeFlexContextProps(props));
}
