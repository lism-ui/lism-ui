import { separateLinkProps } from '../../lib';

export default function getBannarProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('c--banner');
	if (variant) _lismClass.push(` c--banner--${variant}`);

	// hrefあり
	if (props.href) {
		const { linkProps, otherProps } = separateLinkProps(props);
		return { tag: 'a', _lismClass, ...linkProps, ...otherProps };
	}

	return { _lismClass, ...props };
}
