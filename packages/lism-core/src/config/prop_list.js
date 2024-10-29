import TOKENS from './tokens';
// import presets from './presets';
const SPACE_PRESETS = ['0', '5', '10', '20', '30', '40', '50'];
/* 
memo: 
	ユーティリティクラス化されない時の挙動パターン
		1.  .-prop: かつ --prop ( ほとんどこれ )
		2.  普通のstyleとして出力するだけ ( alignSelf など ) → style をもつ
		3.  --prop のみ出力.( keycolor や --bdc など ) →  style をもつ


禁止パターン: 
	styleを持っていて BP:1 
*/

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

export const GAP_PROPS = {
	gap: {
		utilKey: 'g',
		presets: ['inherit', ...SPACE_PRESETS],
		converter: 'space',
		// gap={row, clm} の場合の処理
		// objProcessor: (d) => `${d}g`,
	},
	g: {
		presets: ['inherit', ...SPACE_PRESETS],
		converter: 'space',
	},
	rowg: { converter: 'space' },
	colg: { converter: 'space' },
};

export default {
	// size
	w: { utils: { auto: 'a', 'fit-content': 'fit' }, presets: ['100%'], converter: 'size' },
	h: { utils: { auto: 'a', 'fit-content': 'fit' }, presets: ['100%', 'full'], converter: 'size' },
	maxW: { style: 'maxWidth', presets: ['100%'], converter: 'size' },
	maxH: { style: 'maxHeight', presets: ['100%'], converter: 'size' },
	minW: { style: 'minWidth', presets: ['100%'], converter: 'size' },
	minH: { style: 'minHeight', presets: ['100%'], converter: 'size' },
	is: { style: 'inline-size', converter: 'size' },
	bs: { style: 'block-size', converter: 'size' },
	maxIs: { style: 'maxInlineSize', converter: 'size' },
	maxBs: { style: 'maxBlockSize', converter: 'size' },
	minIs: { style: 'minInlineSize', converter: 'size' },
	minBs: { style: 'minBlockSize', converter: 'size' },

	// is: inline-size, bs: block-size, maxI, maxB, minIs, minBs
	c: { presets: 1, converter: 'color' },
	bgc: { presets: 1, converter: 'color' },
	keycolor: { style: '--keycolor', converter: 'color' },
	boxcolor: { _presets: TOKENS.palette, style: '--keycolor', converter: 'color' },
	bg: { style: 'background', utils: { none: 'n' } },
	backgrounds: { map: 1 },
	// mask: { map: 1 },

	// Typography
	f: { style: 'font', presets: ['inherit'] },
	fz: { presets: TOKENS.fz, converter: 'fz' },
	lh: { presets: ['1', ...TOKENS.lh], style: 'lineHeight' },
	fw: {
		style: 'fontWeight',
		presets: TOKENS.fw,
		//presets: 1
	},
	ff: { style: 'fontFamily', presets: ['base', 'accent', 'mono'], converter: 1 },
	fs: { style: 'fontStyle', utils: { italic: 'i' } },
	lts: { style: 'letterSpacing', presets: TOKENS.lts },
	ta: { style: 'textAlign', utils: { center: 'c', left: 'l', right: 'r' } },
	td: { style: 'textDecoration', utils: { underline: 'u', none: 'n' } },
	tsh: { style: 'textShadow' },
	whs: { style: 'whiteSpace', utils: { nowrap: 'nw' } },
	ovw: { style: 'overflowWrap', utils: { anywhere: 'any' } },

	// others
	bd: { style: 'border', utilKey: 'bd', utils: 1 },
	bdw: { style: '--bdw', presets: ['inherit'] }, // --bdw のみ
	bds: { style: '--bds' }, // --bds のみ
	bdc: { style: '--bdc', presets: 1, converter: 'color' },

	bdrs: { presets: ['inner', '0', ...TOKENS.bdrs], converter: 'bdrs' },

	bxsh: { presets: ['0', ...TOKENS.bxsh], converter: 'bxsh' },
	// shColor: { converter: 'color', style: '--sh-color' },

	//display
	d: { utils: 1 },
	op: {
		style: 'opacity',
		presets: [
			...TOKENS.op,
			'0',
			'0.1',
			'0.2',
			'0.3',
			'0.4',
			'0.5',
			'0.6',
			'0.7',
			'0.8',
			'0.9',
			'1',
		],
		converter: 1,
	}, // op
	v: { style: 'visibility', utils: 'visibility' },
	ov: { style: 'overflow', utils: 1 },
	ovx: { style: 'overflowX', utils: 'ov' },
	ovy: { style: 'overflowY', utils: 'ov' },
	aspect: {
		presets: [
			'16/9',
			'4/3',
			'3/2',
			'2/1',
			'1/1',
			'golden',
			'silver',
			'bronze',
			'ogp',
			'cinema',
		],
	},

	pos: { style: 'position', utils: 1 },
	z: { style: 'zIndex', presets: ['-1', '0', '1', '2'] },
	t: { utils: 'trbl', style: 'top', converter: 'space' },
	l: { utils: 'trbl', style: 'left', converter: 'space' },
	r: { utils: 'trbl', style: 'right', converter: 'space' },
	b: { utils: 'trbl', style: 'bottom', converter: 'space' },
	inset: { style: 1, utils: 1, converter: 'space' },

	// isolation
	// flip: {},

	// Spacing
	p: {
		presets: SPACE_PRESETS, //[...SPACE_PRESETS, ...TOKENS.p],
		converter: 'space',
		// {x, y, t, b, l, r, is, bs } でも指定可能にする
		objProcessor: (d) => `p${d}`,
	},
	px: { presets: SPACE_PRESETS, converter: 'space' },
	py: { presets: SPACE_PRESETS, converter: 'space' },
	pl: { presets: [], converter: 'space' },
	pr: { presets: [], converter: 'space' },
	pt: { presets: [], converter: 'space' },
	pb: { presets: [], converter: 'space' },
	// pis, pbs, pin, pbl
	pis: { presets: SPACE_PRESETS, converter: 'space' },
	pbs: { presets: [], converter: 'space' },
	// pinln, pblck
	// pse: paddingOption,
	// pbe: paddingOption,
	m: {
		utils: { auto: 'a' },
		presets: SPACE_PRESETS,
		converter: 'space',
		// {x, y, t, b, l, r, is, bs } でも指定可能にする
		objProcessor: (d) => `m${d}`,
	},
	mx: { utils: { auto: 'a' }, converter: 'space' },
	my: { utils: { auto: 'a' }, converter: 'space' },
	ml: { converter: 'space' },
	mr: { converter: 'space' },
	mt: { converter: 'space' },
	mb: { converter: 'space' },
	mis: { utils: { auto: 'a' }, converter: 'space' },
	mbs: { presets: SPACE_PRESETS, utils: { auto: 'a' }, converter: 'space' },
	// me: marginOption,
	// mbe: marginOption,

	cols: { style: '--cols' },
	rows: { style: '--rows' },

	...GAP_PROPS,

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

export const CONTEXT_PROPS = {
	grid: {
		gd: {},
		gt: { style: 'gridTemplate' },
		gtc: { onlyVar: 'grid' },
		gtr: { onlyVar: 'grid' },
		gta: { onlyVar: 'grid' },
		gaf: { style: 'gridAutoFlow' },
		gar: { style: 'gridAutoRows' },
		gac: { style: 'gridAutoColumns' },

		// autoFlow, autoRows, autoCols
		// ...GAP_PROPS,
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
		// ...itemProps,
	},

	flex: {
		fxf: { style: 'flex-flow' },
		// nowrap → Emmet は n だが、nw にしている. (whs と揃えている)
		fxw: { utils: { wrap: 'w', nowrap: 'nw' } },
		fxd: { utils: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' } },
		// ...GAP_PROPS,
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
		tl: { style: 'borderTopLeftRadius', utilKey: 'bdtlrs', converter: 'bdrs' },
		tr: { style: 'borderTopRightRadius', utilKey: 'bdtrrs', converter: 'bdrs' },
		bl: { style: 'borderBottomLeftRadius', utilKey: 'bdblrs', converter: 'bdrs' },
		br: { style: 'borderBottomRightRadius', utilKey: 'bdbrrs', converter: 'bdrs' },
		ss: { style: 'borderStartStartRadius', utilKey: 'bdssrs', converter: 'bdrs' },
		se: { style: 'borderStartEndRadius', utilKey: 'bdsers', converter: 'bdrs' },
		es: { style: 'borderEndStartRadius', utilKey: 'bdesrs', converter: 'bdrs' },
		ee: { style: 'borderEndEndRadius', utilKey: 'bdeers', converter: 'bdrs' },
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
		is: {
			style: 'insetInlineStart',
			utilKey: 'iis',
			utils: 'insets',
			converter: 'space',
		},
		ie: {
			style: 'insetInlineEnd',
			utilKey: 'iie',
			utils: 'insets',
			converter: 'space',
		},
		bs: {
			style: 'insetBlockStart',
			utilKey: 'ibs',
			utils: 'insets',
			converter: 'space',
		},
		be: {
			style: 'insetBlockEnd',
			utilKey: 'ibe',
			utils: 'insets',
			converter: 'space',
		},
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

	css: {
		listStyle: { style: 'listStyle', utilKey: 'lis', utils: { none: 'n' } },
		boxSizing: { style: 1, utils: { 'content-box': 'cb' }, utilKey: 'bxz' },
		transform: { style: 1, utils: 1, utilKey: 'trf' },
		transformOrigin: { style: 1, utilKey: 'trfo', utils: 1 },
		translate: { style: 1, utils: 1, utilKey: 'trslt' },
		rotate: { style: 1, utils: 1 }, // rot?
		scale: { style: 1, utils: 1 }, //
		animation: { utilKey: 'anim', style: 1 },
		// flip: { style: 1 },
		clipPath: { style: 1 }, // cpp ?

		// appearance: { style: 1, utils: { none: 'n' } },
		objectFit: { style: 1, utilKey: 'obf', utils: { cover: 'cv', contain: 'cn' } },
		objectPosition: { style: 1 },

		filter: { style: 1, converter: 'filter' }, // fltr?
		backdropFilter: { style: 1, converter: 'filter' }, // bdfltr?
	},

	// hov: { c, bgc, bdc, bxsh },
};
