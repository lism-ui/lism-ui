import { mergeFlexContextProps } from '../Flex/getProps';

export default function getBadgeProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('b--badge');
	if (variant) _lismClass.push(`b--badge--${variant}`);

	const defaultProps = {
		tag: 'span',
		skipState: true,
		boxcolor: 'content',
		// bdrs: 'xs',
		// fz: 'xs',
		// px: '10',
		_lismClass,
	};

	return Object.assign(defaultProps, mergeFlexContextProps(props));
}
