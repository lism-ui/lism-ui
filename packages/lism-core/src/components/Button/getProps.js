// import { separateLinkProps } from '../../lib';

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

	if (iconOffset) {
		style['--icon--offset'] = iconOffset;
	}

	const defaultProps = {
		_lismClass,
		style,
		hover: 'fade',
		// gap: 'em5',
		// py: 'em3',
		// px: 'em10',
		// jc: 'center',
		// ai: 'center',
	};

	// const leftIconProps = { 'data-position': 'left' };
	// const rightIconProps = { 'data-position': 'right' };

	if (isGrid) {
		textProps.gridItem = { gc: 2, jslf: 'c' };
		// leftIconProps.gridItem = { gc: 1 };
		// rightIconProps.gridItem = { gce: -1 };
	}

	return { btnProps: Object.assign(defaultProps, props), textProps };
}

export function getIconButtonProps({ _lismClass = [], variant = 'fill', style = {}, ...props }) {
	_lismClass.push('c--button');
	if (variant) _lismClass.push(` c--button--${variant}`);

	const defaultProps = {
		_lismClass,
		style,
		hover: 'fade',
		// gap: 'em5',
		// py: 'em3',
		// px: 'em10',
		// jc: 'center',
		// ai: 'center',
	};

	return Object.assign(defaultProps, props);
}
