import { mergeFlexContextProps } from '../Flex/getProps';

export default function getBadgeProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('b--badge');
	if (variant) _lismClass.push(`b--badge--${variant}`);

	const defaultProps = {
		tag: 'span',
		boxcolor: 'content',
		skipState: true,
		_lismClass,
	};

	return Object.assign(defaultProps, mergeFlexContextProps(props));
}
