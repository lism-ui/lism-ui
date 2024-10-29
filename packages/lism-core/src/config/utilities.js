// 特定のCSSプロパティ用キーワードをユーティリティ化するためのリスト。
const places = {
	center: 'c',
	start: 's',
	end: 'e',
	'flex-start': 'fs',
	'flex-end': 'fe',
};
const selfPlaces = {
	center: 'c',
	start: 's',
	end: 'e',
	stretch: 'str',
};
export default {
	// color: {},
	// bgc: { none: 't', transparent: 't', currentColor: 'cc' },
	// bdc: { none: 't', transparent: 't' },
	bgcp: { text: 'tx' },
	place: places,
	placeItems: { ...places, stretch: 'str' },
	placeContent: { ...places, 'space-between': 'sb' },
	selfPlace: selfPlaces,

	bd: {
		// current: 'cc',
		// currentColor: 'cc',
		// transparent: 't',
		none: 'n',
		left: 'l',
		right: 'r',
		top: 't',
		bottom: 'b',
		inline: 'x',
		block: 'y',
		'inline-start': 'is',
		'inline-end': 'ie',
		'block-start': 'bs',
		'block-end': 'be',
	},
	pos: {
		relative: 'r',
		absolute: 'a',
		static: 's',
		fixed: 'f',
		sticky: 'sticky',
	},
	inset: { '0%': '0' }, // inset は 0% だけ
	insets: { '0%': '0', '100%': '100%' }, // top,left,right,bottom 用
	trbl: { '0%': '0', '50%': '50%', '100%': '100%' }, // top,left,right,bottom 用
	ov: { scroll: 's', hidden: 'h', auto: 'a', clip: 'c' },
	visibility: { hidden: 'h', visible: 'v' },
	d: {
		none: 'n',
		block: 'b',
		flex: 'f',
		grid: 'g',
		inline: 'i',
		'inline-flex': 'if',
		'inline-grid': 'ig',
		'inline-block': 'ib',
	},
	rotate: { '45deg': '45', '-45deg': '-45', '90deg': '90', '-90deg': '-90' },
	transformOrigin: {
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
		// 'scaleX(-1)': 'flipX',
		// 'scaleY(-1)': 'flipY',
		// 'scaleX(-1) scaleY(-1)': 'flipXY',
	},
	scale: {
		'-1 1': '-X',
		'1 -1': '-Y',
		'-1 -1': '-XY',
	},
	translate: {
		'-50% -50%': '-50XY',
		'-50%': '-50X',
		'-50% 0': '-50X',
		'0 -50%': '-50Y',
		// '-100% -100%': '-100',
		// '50% 50%': '50XY',
		// '-100%': '-100X',
		// '-100% 0': '-100X',
		// '0 -100%': '-100Y',
		// 50%
	},
	// whs: { nowrap: 'nw' },
	// ovw: { anywhere: 'any' },
	// lis: { none: 'n' },
};
