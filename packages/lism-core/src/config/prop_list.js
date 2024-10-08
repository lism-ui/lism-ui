/* memo: 

options.name: 受け取るprop名と実際に出力するutilクラス名、style名がどちらも異なる場合に指定する
	[string]

	例: rowGap → rowg, shadow → bxsh

options.utilKey: 受け取るprop名と、ユーティリティクラスとして出力される時のキー名が異なる場合に指定する。
	[string]

	例: translate → '.-trslt:{val}'

options.presets: 指定された値をそのままユーティリティクラス名に使用する時のリスト(またはそれを取得するキー）
	[array, string, or 1]

	例: p={20} → .-p:20
	配列で指定 → その中身との比較
	文字列で指定→ PRESETS[str] でプリセット値のリストを取得してくる。

options.utils: 指定された値を別の文字に変換してユーティリティクラス名に使用する時のリスト(またはそれを取得するキー）
	[object, string, or 1]

	objで指定 → その中身との比較
	文字列で指定→ UTILITIES[str] でプリセット値のリストを取得してくる。
	例: pos="absolute" → '.-pos:a'

options.style: プリセット値以外の時に出力するスタイル名を指定する。
	[string | 1]
	この指定がある時、 .-prop: クラスは出力されず、styleのみ出力されるようになる。
		例: maxW → maxWidth

	1 を指定すると、prop名と同じキーでstyleに渡される。
		例 opacity, alignSelf など

	Note: styleを持てるのは BPサポートがないpropのみ.
		(BPサポートするpropは .-prop:,--prop として出力するように統一する。)

options.converter: 特定のプリセット値などに変換する処理をはさみたい時に指定する
	[string | function]

	例: space系の 20 → var(--s--20)
	例: color系など

options.objProcessor: 方向成分を指定できるpropで、そのオブジェクトをどう処理するかを指定する
	[string | function]

	例: p={{x:20, y:40}} → px, py としてそれぞれ処理

↓ 未実装
options.splitProcessor: スペース区切りで成分を指定できるpropで、その文字列をどう処理するかを指定する
	[string | function]

	例: p="20 40" → px, py としてそれぞれ処理


memo: 
	ユーティリティクラス化されない時の挙動パターン
		1.  .-prop: かつ --prop ( ほとんどこれ )
		2.  普通のstyleとして出力するだけ ( alignSelf など ) → style をもつ
		3.  --prop のみ出力.( keycolor や --bdc など ) → withUtil:0 かつ style をもつ
		4. propのname と 出力name が変わる ( radius → bdrs) →  name をもつ

禁止パターン: 
	styleを持っていて BP:1 
	styleを持っていて withUtil:0

*/

const marginOption = { utils: 'margin', converter: 'space' };
const paddingOption = { presets: ['0'], converter: 'space' };
// const placeSelfProps = {};
// const bdrsSidesProps = { presets: ['0'], converter: 'radius' };
const insetsProps = { utils: 'insets', converter: 'space' };

// pi,pc
const placeProps = {
	pi: { style: 'placeItems' },
	pc: { style: 'placeContent' },
	ai: { style: 'alignItems', utils: 'placeItems' },
	ac: { style: 'alignContent', utils: 'placeContent' },
	ji: { style: 'justifyItems', utils: 'placeItems' },
	jc: { style: 'justifyContent', utils: 'placeContent' },
};
const itemProps = {
	ord: { style: 'order', utilKey: 'ord', presets: ['0', '-1', '1'] },
	aslf: { style: 'alignSelf', utilKey: 'aslf', utils: 'selfPlace' },
	jslf: { style: 'justifySelf', utilKey: 'jslf', utils: 'selfPlace' },
	pslf: { style: 'placeSelf', utilKey: 'pslf', utils: 'selfPlace' },
};

export default {
	// size
	w: { utils: 'size', converter: 'size' },
	h: { utils: 'size', presets: ['full'], converter: 'size' },
	maxW: { style: 'maxWidth', utils: 'maxSize', converter: 'size' },
	maxH: { style: 'maxHeight', utils: 'maxSize', converter: 'size' },
	minW: { style: 'minWidth', utils: 'minSize', converter: 'size' },
	minH: { style: 'minHeight', utils: 'minSize', converter: 'size' },

	// is: inline-size, bs: block-size, maxI, maxB, minIs, minBs
	c: { presets: 1, utils: 1, converter: 'color' },
	bgc: { presets: 1, utils: 1, converter: 'color' },
	keycolor: { style: '--keycolor', converter: 'color' },
	boxcolor: { presets: 'palette', converter: 'color' },
	bg: { style: 'background', presets: 1, utils: 1 },
	backgrounds: { map: 1 },
	// mask: { map: 1 },
	bd: {
		// map: 1,
		style: 'border',
		utilKey: 'bd',
		presets: 1,
		utils: 1,
		// objProcessor: (d) => `bd${d}`, // {c,w,s}で指定できるようにする
	},

	// Typography
	f: { style: 'font', utils: 1 },
	fz: { presets: 1, converter: 'fz' },
	lh: { presets: 1, style: 'lineHeight' },
	fw: {
		style: 'fontWeight',
		utils: 1,
		//presets: 1
	},
	ff: { style: 'fontFamily', presets: 1 },
	fs: { style: 'fontStyle', utils: 1 },
	lts: { style: 'letterSpacing', presets: 1 }, // utilityあってもいい
	ta: { style: 'textAlign', utils: 1 },
	td: { style: 'textDecoration', utils: 1 },
	tsh: { style: 'textShadow' },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },
	ovw: { style: 'overflowWrap', utils: { anywhere: 'any' } },

	// others
	bdw: { style: '--bdw', utils: 1 }, // --bdw のみ
	bds: { style: '--bds' }, // --bds のみ
	bdc: { style: '--bdc', presets: 1, utils: 1, converter: 'color' },
	// borders: { map: 1 },
	// borderSolid: { style: 1 },
	// borderWidth: { style: 1 },

	bdrs: { presets: 'radius', converter: 'radius' },
	// radii: { map: 1 },

	bxsh: { presets: 'shadow', converter: 'shadow' },
	// shColor: { converter: 'color', style: '--sh-color' },

	//display
	d: { utils: 1 },
	opacity: { style: 1 }, // op
	v: { style: 'visibility', utils: 'visibility' },
	ov: { style: 'overflow', utils: 1 },
	ovx: { style: 'overflowX', utils: 'ov' },
	ovy: { style: 'overflowY', utils: 'ov' },
	aspect: { presets: 1 },

	pos: { style: 'position', utils: 1 },
	z: { style: 'zIndex', presets: 1 },
	t: { ...insetsProps, style: 'top' },
	l: { ...insetsProps, style: 'left' },
	r: { ...insetsProps, style: 'right' },
	b: { ...insetsProps, style: 'bottom' },
	inset: { style: 1, utils: 1, converter: 'space' },

	// isolation
	// flip: {},

	// Spacing
	p: {
		presets: 'p',
		converter: 'space',
		// {x, y, t, b, l, r, is, bs } でも指定可能にする
		objProcessor: (d) => `p${d}`,
	},
	px: Object.assign({}, paddingOption, { presets: 'space' }),
	py: Object.assign({}, paddingOption, { presets: 'space' }),
	pl: paddingOption,
	pr: paddingOption,
	pt: paddingOption,
	pb: paddingOption,
	// pis, pbs, pin, pbl
	pis: Object.assign({}, paddingOption, { presets: 'space' }),
	pbs: paddingOption,
	// pinln, pblck
	// pse: paddingOption,
	// pbe: paddingOption,
	m: {
		...marginOption,
		// {x, y, t, b, l, r, is, bs } でも指定可能にする
		objProcessor: (d) => `m${d}`,
	},
	mx: marginOption,
	my: marginOption,
	ml: marginOption,
	mr: marginOption,
	mt: marginOption,
	mb: marginOption,
	mis: marginOption,
	mbs: { ...marginOption, presets: 'space' },
	// me: marginOption,
	// mbe: marginOption,

	cols: { style: '--cols' },
	rows: { style: '--rows' },

	...placeProps,
	...itemProps,
	// insets: { map: 1 },
	// mask: { map: 1 },
	// flex: { map: 1 },
	// grid: { map: 1 },
	// flexItem: { map: 1 },
	// gridItem: { map: 1 },
	// css: { map: 1 },
};

export const GAP_PROPS = {
	gap: {
		presets: 'gap',
		utilKey: 'g',
		converter: 'space',
		// gap={row, clm} の場合の処理
		// objProcessor: (d) => `${d}g`,
	},
	g: {
		presets: 'gap',
		converter: 'space',
	},
	rowg: { converter: 'space' },
	colg: { converter: 'space' },
};

export const CONTEXT_PROPS = {
	grid: {
		gd: {},
		gt: { style: 'gridTemplate' },
		gtc: { onlyVar: 'grid', presets: 1 },
		gtr: { onlyVar: 'grid', presets: 1 },
		gta: { onlyVar: 'grid', presets: 1 },
		gaf: { style: 'gridAutoFlow' },
		gar: { style: 'gridAutoRows' },
		gac: { style: 'gridAutoColumns' },

		// autoFlow, autoRows, autoCols
		...GAP_PROPS,
	},
	gridItem: {
		// item
		ga: { presets: 1, style: 'gridArea' }, // grid-area
		gc: { presets: 1 }, // grid-column
		gcs: { presets: 1, style: 'gridColumnStart' },
		gce: { presets: 1, style: 'gridColumnEnd' },
		gr: { presets: 1 }, // grid-row
		grs: { presets: 1, style: 'gridRowStart' },
		gre: { presets: 1, style: 'gridRowEnd' },
		// ...itemProps,
	},

	flex: {
		fxf: { style: 'flex-flow' },
		fxw: { utils: 1 },
		fxd: { utils: 1 },
		...GAP_PROPS,
	},

	flexItem: {
		fx: { style: 'flex', utils: { '1 1 0': '1' } },
		fxg: { name: 'fxg', presets: ['0', '1'] },
		fxsh: { name: 'fxsh', presets: ['0', '1'] },
		fxb: { name: 'fxb' },
		// ...itemProps,
	},

	// transform: {
	// 	// transform
	// 	transformOrigin: { style: 1, utilKey: 'trfo', utils: 'origin' },
	// 	translate: { style: 1, utils: 1, utilKey: 'trslt' },
	// 	rotate: { style: 1, utils: 1 },
	// 	scale: { style: 1 },
	// },

	radii: {
		tl: { style: 'borderTopLeftRadius', utilKey: 'bdtlrs', converter: 'radius' },
		tr: { style: 'borderTopRightRadius', utilKey: 'bdtrrs', converter: 'radius' },
		bl: { style: 'borderBottomLeftRadius', utilKey: 'bdblrs', converter: 'radius' },
		br: { style: 'borderBottomRightRadius', utilKey: 'bdbrrs', converter: 'radius' },
		ss: { style: 'borderStartStartRadius', utilKey: 'bdssrs', converter: 'radius' },
		se: { style: 'borderStartEndRadius', utilKey: 'bdsers', converter: 'radius' },
		es: { style: 'borderEndStartRadius', utilKey: 'bdesrs', converter: 'radius' },
		ee: { style: 'borderEndEndRadius', utilKey: 'bdeers', converter: 'radius' },
	},

	// borders: {
	// 	l: { style: 'borderLeft', utilKey: 'bdl' },
	// 	r: { style: 'borderRight', utilKey: 'bdr' },
	// 	t: { style: 'borderTop', utilKey: 'bdt' },
	// 	b: { style: 'borderBottom', utilKey: 'bdb' },
	// 	is: { style: 'borderInlineStart', utilKey: 'bdis' },
	// 	bs: { style: 'borderBlockStart', utilKey: 'bdbs' },
	// 	ie: { style: 'borderInlineEnd', utilKey: 'bdie' },
	// 	be: { style: 'borderBlockEnd', utilKey: 'bdbe' },
	// },
	insets: {
		// t: { ...insetsProps, style: 'top' },
		// l: { ...insetsProps, style: 'left' },
		// r: { ...insetsProps, style: 'right' },
		// b: { ...insetsProps, style: 'bottom' },
		is: {
			style: 'insetInlineStart',
			utilKey: 'iis',
			utils: { '100%': '100', '0%': '0' },
			converter: 'space',
		},
		ie: {
			style: 'insetInlineEnd',
			utilKey: 'iie',
			utils: { '100%': '100', '0%': '0' },
			converter: 'space',
		},
		bs: { style: 'insetBlockStart', converter: 'space' },
		be: { style: 'insetBlockEnd', converter: 'space' },
	},

	backgrounds: {
		// bg: { style: 'background' },
		color: { name: 'bgc', presets: 1, utils: 1, converter: 'color' },
		attachment: { style: 'backgroundAttachment' },
		blendMode: { style: 'backgroundBlendMode' },
		clip: { style: 'backgroundClip', utils: 'bgcp', utilKey: 'bgcp' },
		image: { style: 'backgroundImage' },
		origin: { style: 'backgroundOrigin' },
		position: { style: 'backgroundPosition' },
		positionX: { style: 'backgroundPositionX' },
		positionY: { style: 'backgroundPositionY' },
		repeat: { style: 'backgroundRepeat' },
		size: { style: 'backgroundSize' },
	},

	mask: {},
	// animation: {},

	css: {
		listStyle: { style: 'listStyle', utilKey: 'lis', utils: { none: 'n' } },
		boxSizing: { style: 1, utils: { 'content-box': 'cb' }, utilKey: 'bxz' },
		transform: { style: 1, utils: 1, utilKey: 'trf' },
		transformOrigin: { style: 1, utilKey: 'trfo', utils: 1 },
		translate: { style: 1, utils: 1, utilKey: 'trslt' },
		rotate: { style: 1, utils: 1 }, // rot?
		scale: { style: 1, utils: 1 }, //
		// flip: { style: 1 },
		clipPath: { style: 1 }, // cpp ?

		// appearance: { style: 1, utils: { none: 'n' } },
		objectFit: { style: 1, utilKey: 'obf', utils: { cover: 'cv', contain: 'cn' } },
		objectPosition: { style: 1 },

		// animation: { map:1, style: 1, presets: 1 },

		filter: { style: 1, converter: 'filter' }, // fltr?
		backdropFilter: { style: 1, converter: 'filter' }, // bdfltr?
	},

	// hov: { c, bgc, bdc, bxsh },
};
