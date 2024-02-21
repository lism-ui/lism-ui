import AlertPresets from './presets';

export default function getProps({
	_lismClass = [],
	variant,
	preset,
	icon,
	boxcolor,
	isFlow,
	iconProps = {},
	bodyProps = {},
	...props
}) {
	_lismClass.push('c--alert');
	if (variant) _lismClass.push(`c--alert--${variant}`);
	props._lismClass = _lismClass;

	iconProps._lismClass = ['c--alert__icon'];
	bodyProps._lismClass = ['c--alert__body'];

	// isFlowはbody側へ渡す
	if (null != isFlow) {
		bodyProps.isFlow = isFlow;
	}

	// preset指定がある場合の処理
	const presetData = preset ? AlertPresets[preset] : null;
	if (presetData) {
		boxcolor = boxcolor || presetData.color || null;
		icon = icon || presetData.icon || null;
		iconProps.label = iconProps.label || presetData.label || null;
	}

	props.boxcolor = boxcolor || '-';
	iconProps.icon = icon;

	return { alertProps: props, iconProps, bodyProps };
}
