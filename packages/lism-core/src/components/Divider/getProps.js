export function getDividerProps({ _lismClass = [], variant, ...props }) {
	_lismClass.push('a--divider');
	if (variant) _lismClass.push(`a--divider--${variant}`);

	return {
		_lismClass,
		// tag: 'span',
		...props,
		// bd: isVertical ? 'l' : 't',
	};
}
