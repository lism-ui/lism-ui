export default function getBadgeProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('c--badge');
	if (variant) _lismClass.push(`c--badge--${variant}`);

	const defaultProps = {
		tag: 'span',
		boxcolor: 'content',
		skipState: true,
		_lismClass,
	};

	return Object.assign(defaultProps, props);
}
