// import separateLinkProps from '../separateLinkProps';

export default function getBannarProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('b--banner');
	if (variant) _lismClass.push(` b--banner--${variant}`);

	return { _lismClass, ...props };
}
