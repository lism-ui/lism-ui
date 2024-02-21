// import { isEmptyObj, filterEmptyObj } from '../../lib/helper';
export function mergeFlexContextProps(props) {
	if (null == props.flex) props.flex = {};

	['fxf', 'fxd', 'fxw', 'gap', 'rowg', 'colg', 'ai', 'ac', 'ji', 'jc', 'pi', 'pc'].forEach(
		(key) => {
			if (null != props[key]) {
				props.flex[key] = props[key];
				delete props[key];
			}
		}
	);

	return props;
}

export function getFlexProps({ _flex = 'flex', variant, _lismClass = [], ...props }) {
	_lismClass.push(`l--${_flex}`);
	if (variant) _lismClass.push(`l--${_flex}--${variant}`);

	props._lismClass = _lismClass;
	return mergeFlexContextProps(props);
}

export function getFlexItemProps(props) {
	if (null == props.flexItem) props.flexItem = {};

	['fx', 'fxg', 'fxsh', 'fxb', 'aslf', 'jslf', 'pslf', 'ord'].forEach((key) => {
		if (null != props[key]) {
			props.flexItem[key] = props[key];
			delete props[key];
		}
	});

	return props;
}

export function getClusterProps({ lismStyle = {}, itemMinW, ...props }) {
	if (null != itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}
	// if (delimiterColor) {
	// 	lismStyle['--delimiter--c'] = getMaybeCssVar(delimiterColor, 'color');
	// }

	props.lismStyle = lismStyle;
	return props;
}

export function getSideFlexProps({ lismStyle = {}, side = 'last', sideW, fluidMinW, ...props }) {
	props['data-side'] = side;

	if (null != fluidMinW) {
		lismStyle['--fluid--minW'] = fluidMinW;
	}
	if (null != sideW) {
		lismStyle['--side--w'] = sideW;
	}

	props.lismStyle = lismStyle;
	return props;
}
