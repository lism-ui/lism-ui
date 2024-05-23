/* memo: 

options.name: 受け取るprop名と実際に出力するutilクラス名、style名がどちらも異なる場合に指定する
	[string]

	例: rowGap → rowg, shadow → bxsh

options.utilKey: 受け取るprop名と、ユーティリティクラスとして出力される時のキー名が異なる場合に指定する。
	[string]

	例: translate → '.-trnslt:{val}'

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
const bdrsSidesProps = { presets: ['0'], converter: 'radius' };
const insetsProps = { utils: 'insets', converter: 'space' };

export default {
	// size
	w: { utils: 'size', converter: 'size' },
	h: { utils: 'size', presets: ['full'], converter: 'size' },
	maxW: { utils: 'maxSize', converter: 'size' },
	maxH: { utils: 'maxSize', converter: 'size' },
	minW: { utils: 'minSize', converter: 'size' },
	minH: { utils: 'minSize', converter: 'size' },

	// is: inline-size, bs: block-size, maxI, maxB, minIs, minBs
	c: { presets: 1, converter: 'color' },
	bg: { style: 'background', presets: 1, utils: 1 },
	backgrounds: { map: 1 },
	bgc: { presets: 1, utils: 1, converter: 'color' },
	keycolor: { style: '--keycolor', converter: 'color' },
	boxcolor: { presets: 'palette', converter: 'color' },
	// mask: { map: 1 },
	bd: {
		// map: 1,
		presets: 1,
		utils: 1,
		// objProcessor: (d) => `bd${d}`, // {c,w,s}で指定できるようにする
	},
	//
	bdl: { style: 'borderLeft', utils: { none: 'n' } },
	bdr: { style: 'borderRight', utils: { none: 'n' } },
	bdt: { style: 'borderTop', utils: { none: 'n' } },
	bdb: { style: 'borderBottom', utils: { none: 'n' } },
	bdis: { style: 'borderInlineStart', utils: { none: 'n' } },
	bdbs: { style: 'borderBlockStart', utils: { none: 'n' } },
	bdie: { style: 'borderInlineEnd' },
	bdbe: { style: 'borderBlockEnd' },

	// bd="l,r,is"
	bdw: { style: '--bdw' }, // --bdw のみ
	bds: { style: '--bds' }, // --bds のみ
	bdc: { style: '--bdc', presets: 1, utils: 1, converter: 'color' },
	// borderSolid: { style: 1 },
	// borderWidth: { style: 1 },

	// Typography
	f: { style: 1, utils: 1 },
	fz: { presets: 1, converter: 'fz' },
	lh: { presets: 1, style: 'lineHeight' },
	fw: { style: 'fontWeight', presets: 1 },
	ff: { style: 'fontFamiry', presets: 1 },
	fs: { style: 'fontStyle', utils: 1 },
	lts: { style: 'letterSpacing', presets: 1 }, // utilityあってもいい
	ta: { style: 'textAlign', utils: 1 },
	td: { style: 'textDecoration', utils: 1 },
	tsh: { style: 'textShadow', presets: 1, utils: { none: 'n' } },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },
	ovw: { style: 'overflowWrap', utils: { anywhere: 'any' } },

	// others
	bdrs: { presets: 'radius', converter: 'radius' },
	bdradii: { map: 1 },
	// radius: { name: 'bdrs', presets: 'radius', converter: 'radius' },

	bxsh: { presets: 'shadow', converter: 'shadow' },
	// shadow: { name: 'bxsh', presets: 'shadow', converter: 'shadow' },
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
	inset: { style: 1, utils: 1, presets: 1, converter: 'space' },
	insets: { map: 1 },

	// isolation
	// flip: {},

	// Spacing
	p: {
		presets: 'p',
		converter: 'space',
		// {x, y, t, b, l, r, is, bs } でも指定可能にする
		objProcessor: (d) => `p${d}`,
	},
	px: Object.assign({}, paddingOption, { presets: 'pxy' }),
	py: Object.assign({}, paddingOption, { presets: 'pxy' }),
	pl: paddingOption,
	pr: paddingOption,
	pt: paddingOption,
	pb: paddingOption,
	// pis, pbs, pin, pbl
	pis: paddingOption,
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

	mask: { map: 1 },

	// isFlowでのみ有効
	// flowGap: { presets: 1, converter: 'space' },

	// gap: { map: 1 },
	// place: { map: 1 },
	// item: { map: 1 },
	flex: { map: 1 },
	grid: { map: 1 },
	flexItem: { map: 1 },
	gridItem: { map: 1 },

	css: { map: 1 },

	// filter,
	// backdropFilter,
};

export const GAP_PROPS = {
	gap: {
		presets: 'gap',
		converter: 'space',
		// gap={row, clm} の場合の処理
		objProcessor: (d) => `${d}g`,
	},
	rowg: { converter: 'space' },
	colg: { converter: 'space' },
};

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
	ord: { style: 1, utilKey: 'ord', presets: ['0', '-1', '1'] },
	aslf: { style: 'alignSelf', utilKey: 'aslf', utils: 'selfPlace' },
	jslf: { style: 'justifySelf', utilKey: 'jslf', utils: 'selfPlace' },
	pslf: { style: 'placeSelf' },
};
export const CONTEXT_PROPS = {
	grid: {
		gd: { style: 'grid' },
		gt: { onlyVar: 'grid', presets: 1 },
		gtc: { onlyVar: 'grid' },
		gtr: { onlyVar: 'grid' },
		gta: { presets: 1 },
		gaf: { style: 'gridAutoFlow' },
		gar: { style: 'gridAutoRows' },
		gac: { style: 'gridAutoColumns' },

		// autoFlow, autoRows, autoCols
		...GAP_PROPS,
		...placeProps,
	},
	gridItem: {
		// item
		ga: { presets: 1 }, // grid-area
		gc: { presets: 1 }, // grid-column
		gcs: { presets: 1, style: 'gridColumnStart' },
		gce: { presets: 1, style: 'gridColumnEnd' },
		gr: { presets: 1 }, // grid-row
		grs: { presets: 1, style: 'gridRowStart' },
		gre: { presets: 1, style: 'gridRowEnd' },
		...itemProps,
	},

	flex: {
		fxf: { style: 'flex-flow' },
		fxw: { utils: 1 },
		fxd: { utils: 1 },
		...GAP_PROPS,
		...placeProps,
	},

	flexItem: {
		fx: { style: 'flex', utils: 1 },
		fxg: { name: 'fxg', presets: ['0', '1'] },
		fxsh: { name: 'fxsh', presets: ['0', '1'] },
		fxb: { name: 'fxb' },
		...itemProps,
	},

	// transform: {
	// 	// transform
	// 	transformOrigin: { style: 1, utilKey: 'trfo', utils: 'origin' },
	// 	translate: { style: 1, utils: 1, utilKey: 'trnslt' },
	// 	rotate: { style: 1, utils: 1 },
	// 	scale: { style: 1 },
	// },

	// radii: { },
	// bdradii:{},
	bdradii: {
		tl: { style: 'borderTopLeftRadius', utilKey: 'bdtlrs', converter: 'radius' },
		tr: { style: 'borderTopRightRadius', utilKey: 'bdtrrs', converter: 'radius' },
		bl: { style: 'borderBottomLeftRadius', utilKey: 'bdblrs', converter: 'radius' },
		br: { style: 'borderBottomRightRadius', utilKey: 'bdbrrs', converter: 'radius' },
		ss: { style: 'borderStartStartRadius', utilKey: 'bdssrs', ...bdrsSidesProps },
		se: { style: 'borderStartEndRadius', utilKey: 'bdsers', ...bdrsSidesProps },
		es: { style: 'borderEndStartRadius', utilKey: 'bdesrs', ...bdrsSidesProps },
		ee: { style: 'borderEndEndRadius', utilKey: 'bdeers', ...bdrsSidesProps },
	},

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
		transform: { map: 1, style: 1, utils: 1, utilKey: 'trf' },
		transformOrigin: { style: 1, utilKey: 'trfo', utils: 'origin' },
		translate: { style: 1, utils: 1, utilKey: 'trnslt' },
		rotate: { style: 1, utils: 1 }, // rot?
		scale: { style: 1, utils: 1 }, //
		// flip: { style: 1 },
		clipPath: { style: 1 }, // cpp ?

		lis: { style: 'listStyle', utils: { none: 'n' } },
		// appearance: { style: 1, utils: { none: 'n' } },
		objectFit: { style: 1, utilKey: 'obf', utils: 1 },
		objectPosition: { style: 1 },

		// animation: { map:1, style: 1, presets: 1 },
		filter: { style: 1, converter: 'filter' },
		// bdfltr
		backdropFilter: { style: 1, utilKey: 'bdFilter', presets: ['blur'], converter: 'filter' },
		// mixBlendMode
	},
};
