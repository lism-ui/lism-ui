import isPresetValue from './isPresetValue';
import getMaybeCssVar from './getMaybeCssVar';

// const LAYOUT_STATE = {
// 	'is--container': {
// 		varName: '--contentSize',
// 		tokenKey: 'contentSize',
// 		converter: 'size',
// 	},
// 	'is--flow': {
// 		varName: '--flowGap',
// 		tokenKey: 'flow',
// 		converter: 'space',
// 	},
// };

// 特殊な処理が必要なレイアウトステート
export function getContainerData(value) {
	// const { varName, tokenKey, converter } = LAYOUT_STATE[stateName];
	let className = '';
	let style = null;

	if (value === true) {
		className = 'is--container';
	} else if (value) {
		if (isPresetValue('contentSize', value)) {
			className = `is--container -contentSize:${value}`;
		} else {
			className = `is--container -contentSize:`;
			style = { '--contentSize': getMaybeCssVar(value, 'space') };
		}
	}
	return { className, style };
}

export function getFlowData(value) {
	let className = '';
	let style = null;

	if (value === true) {
		className = 'is--flow';
	} else if (value) {
		if (isPresetValue('flow', value)) {
			className = `is--flow -flowGap:${value}`;
		} else {
			className = `is--flow -flowGap:`;
			style = { ['--flowGap']: getMaybeCssVar(value, 'space') };
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
	hasGutter,
	hasDivider,

	...props
}) {
	if (isContainer) {
		// lismState.push('is--container');
		const { className, style } = getContainerData(isContainer);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}
	if (isFlow) {
		const { className, style } = getFlowData(isFlow);
		lismState.push(className);
		Object.assign(lismStyle, style);
	}

	hasGutter && lismState.push('has--gutter');
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
