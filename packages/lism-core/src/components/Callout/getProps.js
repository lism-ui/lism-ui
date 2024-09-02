import CalloutPresets from './presets';

// isPlain とかで初期スタイルなしにする？
export default function getProps({
	_lismClass = [],
	variant,
	type = 'alert',
	icon,
	boxcolor,
	isFlow,
	// iconProps = {},
	// bodyProps = {},
	...props
}) {
	_lismClass.push('c--callout');
	if (variant) _lismClass.push(`c--callout--${variant}`);
	// props._lismClass = _lismClass;

	const theProps = { _lismClass };
	const iconProps = { _lismClass: ['c--callout__icon'], c: 'boxcolor' };
	const bodyProps = { _lismClass: ['c--callout__body'] };

	// isFlowはbody側へ渡す
	if (null != isFlow) bodyProps.isFlow = isFlow;

	// preset 指定がある場合の処理
	const presets = type ? CalloutPresets[type] : null;
	if (presets) {
		boxcolor = boxcolor || presets.color || null;
		icon = icon || presets.icon || null;
	}

	theProps.boxcolor = boxcolor || 'gray';

	return { calloutProps: { ...theProps, ...props }, icon, iconProps, bodyProps };
}
