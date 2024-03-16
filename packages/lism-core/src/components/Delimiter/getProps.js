export default function ({ _lismClass = [], variant, ...props }) {
	_lismClass.push('e--delimiter');
	if (variant) _lismClass.push(`e--delimiter--${variant}`);

	const defaultProps = {
		skipState: true,
		tag: 'span',
		_lismClass,
	};

	// aria-hidden='true'、デフォルトでつける？

	return Object.assign(defaultProps, props);
}
