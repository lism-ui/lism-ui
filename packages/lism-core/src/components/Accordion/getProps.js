import atts from '../../lib/helper/atts';

export function getAccGroupProps({
	lismClass,
	duration,
	allowMultiple = true,
	style = {},
	...props
}) {
	props.lismClass = atts(lismClass, 'd--accordions');

	if (duration) {
		style['--acc-duration'] = duration;
	}

	if (!allowMultiple) {
		props['data-acc-multiple'] = 'disallow';
	}

	props.style = style;
	return props;
}

// duration: [s]
export function getAccProps({ lismClass, style = {}, duration, ...props }) {
	props.lismClass = atts(lismClass, 'd--accordion');

	if (duration) style['--acc-duration'] = duration;
	props.style = style;

	return props; //mergeFlexContextProps(props);
}

export function getAccIconProps({ isTrigger, ...props }) {
	const defaultProps = { lismClass: 'd--accordion__icon', tag: 'span', d: 'inline-grid' };
	// isTrigger なら、buttun にする
	if (isTrigger) {
		defaultProps.tag = 'button';
		props['data-role'] = 'trigger';
	}

	return { ...defaultProps, ...props };
}

export const defaultProps = {
	header: { lismClass: 'd--accordion__header', ai: 'c' },
	label: { lismClass: 'd--accordion__label', tag: 'span', fx: '1' },
	body: {
		lismClass: 'd--accordion__body',
	},
	inner: {
		lismClass: 'd--accordion__inner',
		ov: 'hidden',
	},
};
