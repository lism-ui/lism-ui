import atts from '../../lib/helper/atts';

// duration: [s]
export function getAccProps({ lismClass, variant, style = {}, duration, ...props }) {
	props.lismClass = atts(lismClass, 'c--accordion', variant && `c--accordion--${variant}`);

	if (duration) style['--duration'] = duration;
	props.style = style;

	return props; //mergeFlexContextProps(props);
}

export function getAccGroupProps({
	lismClass,
	variant,
	style = {},
	duration,
	allowMultiple = true,
	...props
}) {
	props.lismClass = atts(
		lismClass,
		'c--accordionGroup',
		variant && `c--accordionGroup--${variant}`
	);

	if (duration) {
		style['--acc-trsdu'] = duration;
	}

	if (!allowMultiple) {
		props['data-acc-multiple'] = 'disallow';
	}

	props.style = style;
	return props;
}

export function getAccHeadProps({ lismClass, ...props }) {
	lismClass = atts(lismClass, 'c--accordion__header');

	const defaultProps = {
		lismClass,
		ai: 'c',
		//p: 'box:s', gap: 20
	};

	// getProps に 'p', 'gap' が含まれている場合、p, gap のデフォルト値を消す
	// if (null !== getProps) {
	// 	if (typeof getProps === 'string') getProps = getProps.split(',');

	// 	if (Array.isArray(getProps)) {
	// 		if (getProps.includes('p')) delete defaultProps.p;
	// 		if (getProps.includes('gap')) delete defaultProps.gap;

	// 		// propsに戻す
	// 		props.getProps = getProps;
	// 	}
	// }

	// 初期値とマージ
	return Object.assign(defaultProps, props);
}

export function getAccBodyProps({ lismClass, isFlow, innerProps = {}, ...props }) {
	props.lismClass = atts(lismClass, 'c--accordion__body');

	innerProps.lismClass = 'c--accordion__inner';
	innerProps.ov = 'hidden';

	if (null != isFlow) innerProps.isFlow = isFlow;

	return { bodyProps: props, innerProps };
}

export function getAccIconProps(trigger) {
	const props = { lismClass: 'c--accordion__icon', tag: 'span', d: 'inline-flex' };

	// isTrigger なら、buttun にする
	if (trigger === 'icon') {
		props.tag = 'button';
		props['data-role'] = 'trigger';
	}

	return props;
}

export function getAccLabelProps(tag = 'span') {
	// 初期値
	const props = { lismClass: 'c--accordion__label', tag, fx: '1' };

	// span以外（hタグなど）になっても見た目は変わらないように
	if ('span' !== tag) props.f = 'inherit';

	return props;
}
