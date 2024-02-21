export default function getBoxProps({ _lismClass = [], variant = '', ...props }) {
	_lismClass.push('l--box');
	if (variant) _lismClass.push(`l--box--${variant}`);

	return { _lismClass, ...props };
}
