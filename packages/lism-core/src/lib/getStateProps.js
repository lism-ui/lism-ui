import isPresetValue from './isPresetValue';
import getMaybeCssVar from './getMaybeCssVar';

const LAYOUT_STATE = {
	// 'is--container': {
	// 	varName: '--containerSize',
	// 	tokenKey: 'contentSize',
	// 	converter: null,
	// },
	'is--container': {
		varName: '--contentSize',
		tokenKey: 'contentSize',
		converter: 'size',
	},
	'is--flow': {
		varName: '--flowGap',
		tokenKey: 'flow',
		converter: 'space',
	},
	// lismState.push(className
};

// 特殊な処理が必要なレイアウトステート
export function getTheStateData(stateName, value) {
	const { varName, tokenKey, converter } = LAYOUT_STATE[stateName];
	let className = '';
	let style = null;

	if (value === true) {
		className = stateName;
	} else if (value) {
		if (tokenKey && isPresetValue(tokenKey, value)) {
			className = `${stateName}:${value}`;
		} else {
			className = `${stateName}:`;
			style = { [varName]: converter ? getMaybeCssVar(value, converter) : value };
		}
	}
	return { className, style };
}

export default function getStateProps({
	lismState = [],
	lismStyle = {},
	isOverwide,
	isFullwide,
	isWide,
	isFlow,
	isContainer,
	// isConstrained,
	// isFrame,
	// isLinkBox,
	hasGutter,
	hasDivider,
	// hasLayer,
	// hasCoverMedia,

	...props
}) {
	if (isContainer) {
		// lismState.push('is--container');
		const { className, style } = getTheStateData('is--container', isContainer);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	// if (isConstrained) {
	// 	if (isConstrained === true) isConstrained = 'm';
	// 	const { className, style } = getTheStateData('is--container', isConstrained);
	// 	lismState.push(className);
	// 	Object.assign(lismStyle, style);
	// }

	if (isFlow) {
		const { className, style } = getTheStateData('is--flow', isFlow);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	hasGutter && lismState.push('has--gutter');
	// hasLayer && lismState.push('has--layer');
	isOverwide && lismState.push('is--overwide');
	isFullwide && lismState.push('is--fullwide');
	isWide && lismState.push('is--wide');

	if (hasDivider && typeof hasDivider === 'string') {
		lismState.push(`has--divider:${hasDivider}`);
	} else if (hasDivider) {
		lismState.push('has--divider');
	}

	// if (hasCoverMedia) lismState.push('has--coverMedia');

	//  else if (typeof hasDivider === 'string') {
	// 	lismState.push(`has--divider:${hasDivider}`);
	// }

	// console.log('lismState', lismState);
	props.lismState = [...new Set(lismState)]; // strictモードで2重レンダリングされる時の重複を削除;
	props.lismStyle = lismStyle;

	return props;
}
