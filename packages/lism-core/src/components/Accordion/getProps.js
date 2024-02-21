// duration: [s]
export function getAccProps({ _lismClass = [], variant, style = {}, duration, ...props }) {
	_lismClass.push('c--accordion');
	if (variant) _lismClass.push(`c--accordion--${variant}`);
	props._lismClass = _lismClass;

	if (duration) {
		style['--duration'] = duration;
	}

	props.style = style;

	return props;
}

export function getAccGroupProps({
	_lismClass = [],
	variant,
	style = {},
	duration,
	allowMultiple = true,
	...props
}) {
	_lismClass.push('c--accordions');
	if (variant) _lismClass.push('c--accordions--' + variant);

	if (duration) {
		style['--accordion--duration'] = duration;
	}

	if (!allowMultiple) {
		props['data-multiple'] = 'disallow';
	}

	props._lismClass = _lismClass;
	props.style = style;
	return props;
}

export function getAccHeadProps({ _lismClass = [], ...props }) {
	_lismClass.push('c--accordion__header');
	props._lismClass = _lismClass;

	const defaultProps = { p: 'box:s', gap: 20 };

	// consume に 'p', 'gap' が含まれている場合、p, gap のデフォルト値を消す
	// if (null !== consume) {
	// 	if (typeof consume === 'string') consume = consume.split(' ');

	// 	if (Array.isArray(consume)) {
	// 		if (consume.includes('p')) delete defaultProps.p;
	// 		if (consume.includes('gap')) delete defaultProps.gap;

	// 		// propsに戻す
	// 		props.consume = consume;
	// 	}
	// }

	// 初期値とマージ
	return Object.assign(defaultProps, props);
}

export function getAccBodyProps({ isFlow, innerProps = {}, ...props }) {
	// 初期値とマージ
	const defaultProps = { _lismClass: ['c--accordion__body'], p: 'box:s' };
	const bodyProps = Object.assign(defaultProps, props);

	innerProps._lismClass = ['c--accordion__inner'];
	if (null != isFlow) innerProps.isFlow = isFlow;

	return { bodyProps, innerProps };
}

export function getAccIconProps({ _lismClass = [], isTrigger, ...props }) {
	_lismClass.push('c--accordion__icon');

	// isTrigger なら、buttun にする
	if (isTrigger) {
		props.tag = 'button';
		props['data-role'] = 'trigger';
	}
	// else {
	// 	// <Icon>側にあるから不要か。
	// 	props['aria-hidden'] = 'true';
	// }

	// 初期値
	const defaultProps = { _lismClass, tag: 'span', d: 'inline-flex' };
	return Object.assign(defaultProps, props);
}

export function getAccLabelProps({ _lismClass = [], tag = 'span', ...props }) {
	_lismClass.push('c--accordion__label');

	// 初期値
	const defaultProps = { _lismClass, tag, fx: '1' };

	// span以外（hタグなど）になっても見た目は変わらないように
	if ('span' !== tag) defaultProps.f = 'inherit';

	return Object.assign(defaultProps, props);
}
