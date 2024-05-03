// import separateLinkProps from '../separateLinkProps';

export default function getBannarProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('c--banner');
	if (variant) _lismClass.push(` c--banner--${variant}`);

	return { _lismClass, ...props };
}
