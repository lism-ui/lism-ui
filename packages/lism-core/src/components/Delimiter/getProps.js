export default function ({ _lismClass = [], variant, ...props }) {
	_lismClass.push('e--delimiter');
	if (variant) _lismClass.push(`e--delimiter--${variant}`);
	props._lismClass = _lismClass;

	// aria-hidden='true'、デフォルトでつける？

	return props;
}
