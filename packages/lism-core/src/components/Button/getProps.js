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
	_lismClass.push('c--button');
	if (variant) _lismClass.push(` c--button--${variant}`);

	const defaultProps = {
		_lismClass,
		skipState: true,
		tag: 'a',
		hover: 'fade',
		// jc: 'center',
		// ai: 'center',
	};
	const defaultTextProps = {
		skipState: true,
		tag: 'span',
		_lismClass: ['c--button__text'],
	};

	const { linkProps, otherProps } = separateLinkProps(props);

	if (iconOffset) {
		style['--icon--offset'] = iconOffset;
	}
	otherProps.style = style;

	// const leftIconProps = { 'data-position': 'left' };
	// const rightIconProps = { 'data-position': 'right' };

	if (isGrid) {
		textProps.gridItem = { gc: 2, jslf: 'c' };
		// leftIconProps.gridItem = { gc: 1 };
		// rightIconProps.gridItem = { gce: -1 };
	}

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
	_lismClass.push('c--button');
	_lismClass.push('c--button--icon');
	if (variant) _lismClass.push(`c--button--${variant}`);

	if (size) {
		style['--size'] = size;
	}

	const defaultProps = {
		_lismClass,
		skipState: true,
		tag: 'a',
		hover: 'fade',
		style,
		// jc: 'center',
		// ai: 'center',
	};

	return Object.assign(defaultProps, props);
}
