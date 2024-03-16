export function getDividerProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('c--divider');
	if (variant) _lismClass.push(`c--divider--${variant}`);

	const defaultProps = {
		_lismClass,
		ai: 'c',
	};

	if (props?.label) {
		defaultProps.fz = 's';
		defaultProps.c = 'content-3';
		defaultProps.gap = 'em4';
	}

	return Object.assign(defaultProps, props);
}
