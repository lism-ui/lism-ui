import atts from '../../lib/helper/atts';
import CalloutPresets from './presets';

// isPlain とかで初期スタイルなしにする？
export default function getProps({
	lismClass,
	variant,
	type = 'alert',
	icon,
	keycolor,
	isFlow,
	// iconProps = {},
	// bodyProps = {},
	...props
}) {
	const iconProps = { lismClass: 'c--callout__icon', c: 'keycolor' };
	const bodyProps = { lismClass: 'c--callout__body' };

	// isFlowはbody側へ渡す
	if (null != isFlow) bodyProps.isFlow = isFlow;

	// preset 指定がある場合の処理
	const presets = type ? CalloutPresets[type] : null;
	if (presets) {
		keycolor = keycolor || presets.color || null;
		icon = icon || presets.icon || null;
	}

	props.lismClass = atts(lismClass, 'c--callout', variant && `c--callout--${variant}`);
	props.keycolor = keycolor;
	props.isColored = true;

	return { calloutProps: props, icon, iconProps, bodyProps };
}
