import isTokenValue from './isTokenValue';
import getMaybeCssVar from './getMaybeCssVar';

// 特殊な処理が必要なレイアウトステート
export function getContainerData(value) {
	// const { varName, tokenKey, converter } = LAYOUT_STATE[stateName];
	let className = '';
	let style = null;

	if (value === true) {
		className = 'is--container';
	} else if (value) {
		if (isTokenValue('contentSize', value)) {
			className = `is--container -container:${value}`;
		} else {
			className = `is--container`;
			style = { '--item-size': getMaybeCssVar(value, 'size') };
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
		if (isTokenValue('flow', value)) {
			className = `is--flow -flow:${value}`;
		} else {
			className = `is--flow -flow:`;
			style = { ['--flowGap']: getMaybeCssVar(value, 'space') };
		}
	}
	return { className, style };
}

export default function getStateProps({
	lismState = [],
	isOverwide,
	isFullwide,
	isWide,
	isFlow,
	isContainer,
	// isConstrained,
	hasGutter,
	style = {},

	...props
}) {
	if (isContainer) {
		// lismState.push('is--container');
		const { className, style: _style } = getContainerData(isContainer);
		lismState.push(className);
		Object.assign(style, _style);
	}
	if (isFlow) {
		const { className, style: _style } = getFlowData(isFlow);
		lismState.push(className);
		Object.assign(style, _style);
	}

	hasGutter && lismState.push('has--gutter');
	isOverwide && lismState.push('is--overwide');
	isFullwide && lismState.push('is--fullwide');
	isWide && lismState.push('is--wide');

	// console.log('lismState', lismState);
	props.lismState = [...new Set(lismState)]; // strictモードで2重レンダリングされる時の重複を削除;
	props.style = style;

	return props;
}
