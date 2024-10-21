import atts from '../../lib/helper/atts';

export function getProps({
	lismClass,
	variant = '',
	// style = {},
	// textProps = {},
	// iconOffset,
	...props
}) {
	const defaultProps = {
		lismClass: atts(lismClass, 'b--button', variant && `b--button--${variant}`),
		skipState: true,
		tag: 'a',
		hov: 'fade',
		// bdrs: '1',
	};

	return Object.assign(defaultProps, props);

	// const defaultTextProps = {
	// 	tag: 'span',
	// 	lismClass: 'b--button__text',
	// 	skipState: true,
	// };

	// return {
	// 	btnProps: Object.assign(defaultProps, props),
	// 	textProps: Object.assign(defaultTextProps, textProps),
	// };
}
