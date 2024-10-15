import atts from '../../lib/helper/atts';

export function getButtonProps({
	lismClass,
	variant = 'fill',
	// style = {},
	textProps = {},
	// iconOffset,
	...props
}) {
	const defaultProps = {
		lismClass: atts(lismClass, 'b--button', variant && `b--button--${variant}`),
		skipState: true,
		tag: 'a',
		hov: 'fade',
	};
	const defaultTextProps = {
		tag: 'span',
		lismClass: 'b--button__text',
		skipState: true,
	};

	// if (iconOffset) {
	// 	style['--icon-offset'] = iconOffset;
	// }
	// props.style = style;

	// const leftIconProps = { 'data-position': 'left' };
	// const rightIconProps = { 'data-position': 'right' };

	// if (isGrid) {
	// 	textProps.gridItem = { gc: 2, jslf: 'c' };
	// }

	return {
		btnProps: Object.assign(defaultProps, props),
		textProps: Object.assign(defaultTextProps, textProps),
	};
}
