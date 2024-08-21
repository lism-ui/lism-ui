import separateLinkProps from '../separateLinkProps';

export function getButtonProps({
	_lismClass = [],
	variant = 'fill',
	isGrid,
	iconOffset,
	style = {},
	textProps = {},
	...props
}) {
	_lismClass.push('b--button');
	if (variant) _lismClass.push(` b--button--${variant}`);

	const defaultProps = {
		_lismClass,
		skipState: true,
		tag: 'a',
		hov: 'fade',
		// jc: 'center',
		// ai: 'center',
	};
	const defaultTextProps = {
		skipState: true,
		tag: 'span',
		_lismClass: ['b--button__text'],
	};

	const { linkProps, otherProps } = separateLinkProps(props);

	if (iconOffset) {
		style['--icon-offset'] = iconOffset;
	}
	otherProps.style = style;

	// const leftIconProps = { 'data-position': 'left' };
	// const rightIconProps = { 'data-position': 'right' };

	// if (isGrid) {
	// 	textProps.gridItem = { gc: 2, jslf: 'c' };
	// }

	return {
		btnProps: Object.assign(linkProps, defaultProps, otherProps),
		textProps: Object.assign(defaultTextProps, textProps),
	};
}

export function getIconButtonProps({
	_lismClass = [],
	variant = 'fill',
	size,
	style = {},
	...props
}) {
	_lismClass.push('b--button');
	_lismClass.push('b--button--icon');
	if (variant) _lismClass.push(`b--button--${variant}`);

	if (size) {
		style['--size'] = size;
	}

	const defaultProps = {
		_lismClass,
		skipState: true,
		tag: 'a',
		hov: 'fade',
		style,
		// jc: 'center',
		// ai: 'center',
	};

	return Object.assign(defaultProps, props);
}
