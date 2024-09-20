import CalloutPresets from '../Callout/presets';
export const NotePresets = CalloutPresets;

export default function getProps({
	_lismClass = [],
	variant = '',
	preset = 'note',
	boxcolor = '',
	isFlow,
	icon,
	...props
}) {
	_lismClass.push('c--note');
	if (variant) _lismClass.push(`c--note--${variant}`);

	const theProps = {
		_lismClass,
		bdrs: 'xs',
		// p: 'box',
		// gap: '20',
		// bd: 'is',
		// bdw: '4px',
		// bdc: 'boxcolor',
	};
	const iconProps = { fz: 'xl', c: 'boxcolor' };
	const headProps = {
		_lismClass: ['c--note__head'],
		skipState: true,
		fw: 'bold',
		ai: 'c',
		gap: 'em4',
	};
	const bodyProps = { _lismClass: ['c--note__body'] };

	// isFlowはbody側へ渡す
	if (null != isFlow) bodyProps.isFlow = isFlow;

	// icon あれば flex に。
	// if (null != props.icon) headProps.ai = 'c';

	const presetData = preset ? NotePresets[preset] : null;
	if (presetData) {
		boxcolor = boxcolor || presetData.color || null;
		icon = icon || presetData.icon || null;
	}

	theProps.boxcolor = boxcolor || 'gray';

	return { noteProps: { ...theProps, ...props }, icon, iconProps, headProps, bodyProps };
}
