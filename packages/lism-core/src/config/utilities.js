// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
const places = {
	center: 'c',
	start: 's',
	end: 'e',
	// left: 'l',
	// right: 'r',
};
const flexPlaces = {
	'flex-start': 'fs',
	'flex-end': 'fe',
	// left: 'l',
	// right: 'r',
};
export default {
	// color: {},
	// c: {},
	bgc: { none: 't', transparent: 't', currentColor: 'cc', inherit: 'i' },
	bdc: { none: 't', transparent: 't', inherit: 'i' },
	bg: { none: 'n' },
	bgcp: { text: 'tx' },
	margin: { auto: 'a', '0px': '0' },
	place: places,
	placeItems: { ...places, ...flexPlaces, stretch: 'str' },
	placeContent: { ...places, ...flexPlaces, 'space-between': 'sb' },
	selfPlace: { ...places, ...flexPlaces, stretch: 'str' },
	ta: { center: 'c', left: 'l', right: 'r' },
	td: { underline: 'u', none: 'n' },

	// Note: 数値指定でユーティリティ化したい時、文字列で渡す。 700 → '700'
	// fw: { thin: '100', light: '300', normal: '400', medium: '500', bold: '700' },
	fs: { italic: 'i', normal: 'n' },
	f: { inherit: 'i' },
	// lh: {},
	// lts:{},

	fx: { '1 1 0': '1' },
	fxw: { wrap: 'w', nowrap: 'nw' }, // nowrap → Emmet は n だが、nw にしている. (whs と揃えている)
	fxd: { column: 'c', row: 'r', 'column-reverse': 'cr', 'row-reverse': 'rr' },

	// width, height用のユーティリティ値
	size: {
		'100%': '100',
		// '75%': '75',
		// '50%': '50',
		// '25%': '25',
		'fit-content': 'fit',
		// unset: 'un',
	},

	// maxW, maxH
	maxSize: {
		//unset: 'un',
		'100%': '100',
	},

	// minW, minH
	minSize: {
		//unset: 'un',
		'100%': '100',
	},
	bd: {
		// current: 'cc',
		// currentColor: 'cc',
		// transparent: 't',
		left: 'l',
		right: 'r',
		top: 't',
		bottom: 'b',
		inline: 'x',
		block: 'y',
		'inline-start': 'is',
		'block-start': 'bs',
	},

	pos: {
		relative: 'r',
		absolute: 'a',
		static: 's',
		fixed: 'f',
		sticky: 'sticky',
	},
	inset: { '0%': '0' }, // inset は 0% だけ
	insets: { '0%': '0', '50%': '50', '100%': '100' }, // top,left,right,bottom 用
	ov: { scroll: 's', hidden: 'h', auto: 'a', clip: 'c' },
	visibility: { hidden: 'h', visible: 'v' },
	d: {
		none: 'n',
		block: 'b',
		flex: 'f',
		grid: 'g',
		inline: 'i',
		'inline-flex': 'if',
		'inline-block': 'ib',
	},
	rotate: { '45deg': '45', '-45deg': '-45', '90deg': '90', '-90deg': '-90', '180deg': '180' },
	origin: {
		center: 'c',
		'left top': 'lt',
		'right top': 'rt',
		'left bottom': 'lb',
		'right bottom': 'rb',
		'50%': 'c',
		'0% 0%': 'lt',
		'100% 0%': 'rt',
		'0% 100%': 'lb',
		'100% 100%': 'rb',
	},

	transform: {
		'scaleX(-1)': 'flipX',
		'scaleY(-1)': 'flipY',
		'scaleX(-1) scaleY(-1)': 'flipXY',
	},
	scale: {
		'-1 1': '-X',
		'1 -1': '-Y',
		'-1 -1': '-XY',
	},
	translate: {
		// '-100% -100%': '-100',
		'-50% -50%': '-50',
		'-100%': '-100X',
		'-100% 0': '-100X',
		'0 -100%': '-100Y',
		// 50%
		'-50%': '-50X',
		'-50% 0': '-50X',
		'0 -50%': '-50Y',
	},
	// whs: { nowrap: 'nw' },
	// ovw: { anywhere: 'any' },
	// lis: { none: 'n' },
	objectFit: { cover: 'cv', contain: 'cn' },
};
