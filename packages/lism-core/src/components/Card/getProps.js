export function getCardProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('c--card');
	if (variant) _lismClass.push(`c--card--${variant}`);

	return {
		_lismClass,
		bxsh: '2',
		bdrs: 's',
		...props,
	};
}

export function getCardBodyProps(props) {
	const defaultProps = {
		_lismClass: ['c--card__body'],
		p: 'box',
		// gap: layout ? null : 20,
	};

	return Object.assign(defaultProps, props);
}

export function getCardMediaProps(props) {
	const defaultProps = {
		_lismClass: ['c--card__media'],
		skipState: true,
	};

	return Object.assign(defaultProps, props);
}

// export function getIconButtonProps({ _lismClass = [], variant = 'fill', ...props }) {}
