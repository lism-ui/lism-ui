import getBpData from '../../lib/getBpData';

// gt + gtc, gtr の併用がなければ、コンテキストをセットして変数だけの出力にする
export function getGridContext(gridProps = {}) {
	if (gridProps?.gt && (gridProps?.gtc || gridProps?.gtr)) {
		return null;
	}
	return 'grid';
}

// 1:2:3 → 1fr 2fr 3fr に変換
// function getMaybeFrs(value) {
// 	// ":" があれば分解して配列化し、"fr" を付けて連結して返す
// 	if (typeof value === 'string' && value.indexOf(':') !== -1) {
// 		const splitArray = value.split(':');

// 		if (isNumStr(splitArray[0])) {
// 			//splitArrayの 0番目の要素が数値に変換できるか確認してから fr に変換
// 			return splitArray.map((s) => `${s}fr`).join(' ');
// 		}
// 	}

// 	return value;
// }

export function mergeGridContextProps(props) {
	if (null == props.grid) props.grid = {};

	// ratioの扱い
	// if (props.ratio) {
	// 	props.gtc = objMap(getBpData(props.ratio), getMaybeFrs);
	// 	delete props.ratio;
	// }

	// gtc,gtr自体を N:M の形式で指定できるように？
	// ['gtc', 'gtr'].forEach((key) => {
	// 	if (null != props[key]) {
	// 		props.grid[key] = objMap(getBpData(props[key], getMaybeFrs));
	// 		delete props[key];
	// 	}
	// });

	[
		'gd',
		'gt',
		'gta',
		'gtc',
		'gtr',
		'gaf',
		'gar',
		'gac',
		'gap',
		'rowg',
		'colg',
		'ai',
		'ac',
		'ji',
		'jc',
		'pi',
		'pc',
	].forEach((key) => {
		if (null != props[key]) {
			props.grid[key] = props[key];
			delete props[key];
		}
	});

	return props;
}

export function getGridProps({
	_grid = 'grid',
	variant,
	_lismClass = [],
	lismStyle = {},
	itemMinW,
	...props
}) {
	_lismClass.push(`l--${_grid}`);
	if (variant) _lismClass.push(`l--${_grid}--${variant}`);

	// grid 系の props をまとめる
	let returnProps = mergeGridContextProps(props);
	returnProps._context = getGridContext(props?.grid);

	if (itemMinW) {
		lismStyle['--item--minW'] = itemMinW;
	}

	returnProps._lismClass = _lismClass;
	returnProps.lismStyle = lismStyle;

	return returnProps;
}

export function getGridItemProps(props) {
	if (null == props.gridItem) props.gridItem = {};

	['ga', 'gc', 'gr', 'gcs', 'gce', 'grs', 'gre', 'aslf', 'jslf', 'pslf', 'ord'].forEach((key) => {
		if (null != props[key]) {
			props.gridItem[key] = props[key];
			delete props[key];
		}
	});

	return props;
}

export function getSideSwapProps({
	style = {},
	sideW,
	side = 'end bottom', // "start top"|"start bottom"|"end top"|"end bottom"
	bp = 'sm',
	gt = {},
	...props
}) {
	if (undefined !== sideW) {
		style['--sideW'] = sideW;
	}

	props.gt = getBpData(gt);
	props.gt[bp] = '-';

	// if (customBreakPoint) {
	// 	blockProps['data-break'] = 'custom';
	// 	blockProps['data-custom-break'] = customBreakPoint;
	// }

	return Object.assign(props, { 'data-side': side, style });
}
