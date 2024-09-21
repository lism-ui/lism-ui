import atts from '../../lib/helper/atts';
import separateLinkProps from '../separateLinkProps';

export function getButtonProps({
	lismClass,
	variant = 'fill',
	iconOffset,
	style = {},
	textProps = {},
	...props
}) {
	const defaultProps = {
		lismClass: atts(lismClass, 'b--button', variant && `b--button--${variant}`),
		skipState: true,
		tag: 'a',
		hov: 'fade',
		// jc: 'center',
		// ai: 'center',
	};
	const defaultTextProps = {
		tag: 'span',
		lismClass: 'b--button__text',
		skipState: true,
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

export function getIconButtonProps({ lismClass, variant = 'fill', size, style = {}, ...props }) {
	if (size) {
		style['--size'] = size;
	}

	const defaultProps = {
		lismClass: atts(
			lismClass,
			'b--button',
			'b--button--icon',
			variant && `b--button--${variant}`
		),
		skipState: true,
		tag: 'a',
		hov: 'fade',
		style,
		// jc: 'center',
		// ai: 'center',
	};

	return Object.assign(defaultProps, props);
}
