// import { mergeFlexContextProps } from '../Flex/getProps';
// import { getChildIconProps } from '../Icon/getProps';

// duration: [s]
export function getAccProps({ _lismClass = [], variant, style = {}, duration, ...props }) {
	_lismClass.push('c--accordion');
	if (variant) _lismClass.push(`c--accordion--${variant}`);
	props._lismClass = _lismClass;

	if (duration) {
		style['--duration'] = duration;
	}

	props.style = style;

	return props; //mergeFlexContextProps(props);
}

export function getAccGroupProps({
	_lismClass = [],
	variant,
	style = {},
	duration,
	allowMultiple = true,
	...props
}) {
	_lismClass.push('c--accordionGroup');
	if (variant) _lismClass.push('c--accordionGroup--' + variant);

	if (duration) {
		style['--acc-trsdu'] = duration;
	}

	if (!allowMultiple) {
		props['data-acc-multiple'] = 'disallow';
	}

	props._lismClass = _lismClass;
	props.style = style;
	return props;
}

export function getAccHeadProps({ _lismClass = [], ...props }) {
	_lismClass.push('c--accordion__header');

	const defaultProps = {
		_lismClass,
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

export function getAccBodyProps({ isFlow, innerProps = {}, ...props }) {
	// 初期値とマージ
	const defaultProps = { _lismClass: ['c--accordion__body'] };
	const bodyProps = Object.assign(defaultProps, props);

	innerProps._lismClass = ['c--accordion__inner'];
	innerProps.ov = 'hidden';

	if (null != isFlow) innerProps.isFlow = isFlow;

	return { bodyProps, innerProps };
}

export function getAccIconProps(trigger) {
	const props = { _lismClass: ['c--accordion__icon'], tag: 'span', d: 'inline-flex' };

	// isTrigger なら、buttun にする
	if (trigger === 'icon') {
		props.tag = 'button';
		props['data-role'] = 'trigger';
	}

	return props;
}

export function getAccLabelProps(tag = 'span') {
	// 初期値
	const props = { _lismClass: ['c--accordion__label'], tag, fx: '1' };

	// span以外（hタグなど）になっても見た目は変わらないように
	if ('span' !== tag) props.f = 'inherit';

	return props;
}
