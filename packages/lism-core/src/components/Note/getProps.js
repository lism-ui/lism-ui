import AlertPresets from '../Alert/presets';
export const NotePresets = AlertPresets;

export default function getProps(_props) {
	let {
		lismClass = {},
		// lismStyle = {},
		variant = '',
		preset = '',
		boxcolor = '',
		// isFlow,
		// icon,
		// iconProps = {},
		// iconSize = '1.4em',
		// heading,
		// keycolor,
		// headProps = {},
		// bodyProps = {},
		...props
	} = _props;

	lismClass.c = 'c--note';
	if (variant) lismClass.c += ` c--note--${variant}`;
	props.lismClass = lismClass;

	const presetData = preset ? NotePresets[preset] : null;
	if (presetData) {
		boxcolor = boxcolor || presetData.color || null;
		props.icon = props.icon || presetData.icon || null;
	}

	props.boxcolor = boxcolor || '-';

	// icon あれば flex に。
	if (null != props.icon) {
		props.headProps = Object.assign(
			{},
			{
				as: 'Flex',
				ai: 'center',
			},
			props.headProps || {}
		);
	}

	return props;

	// const bodyProps = {};

	// lifted or bump?
	// if ('lifted' === variant) {
	// 	// borderの上に重ねる
	// 	Object.assign(headProps, {
	// 		pos: 'absolute',
	// 		top: 0,
	// 		left: 0,
	// 		translate: '0 -50%',
	// 	});
	// 	bodyProps.mbs = '10';
	// }
}
