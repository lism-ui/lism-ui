import TOKENS from './tokens';

const spacingPresets = ['0', '5', '10', '20', '30', '40', '50'];
const emPresets = ['em1', 'em2', 'em3', 'em4', 'em6', 'em8', 'em10', 'em12', 'em14', 'em16'];

// ユーティリティクラス化するキーワード
export default {
	radius: ['inner', '0', ...TOKENS.radius],
	shadow: TOKENS.shadow,
	fz: TOKENS.fz,
	lh: ['1', ...TOKENS.lh], // 検討
	lts: TOKENS.lts,
	ff: TOKENS.ff,
	fw: TOKENS.fw,
	// tsh: ['black', 'white'],
	c: [
		'main',
		// 'accent',
		'base',
		'content-2',
		'content-3',
		'boxcolor',
		'cbox',
	],
	bgc: [
		'main',
		// 'accent',
		'base',
		'base-2',
		'base-3',
		'content',
		'boxcolor',
		'cbox',
	],
	bdc: [
		'main',
		//'accent',
		'mix',
		'divider',
		// 'table',
		'boxcolor',
		'cbox',
	],
	palette: [
		// 'main',
		// 'accent',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		'gray',
		'black',
		'white',
		// 'basic',
	],

	// ユーティリティ化
	space: spacingPresets,
	p: [...spacingPresets, ...TOKENS.p],
	pxy: [...spacingPresets],
	gap: [...spacingPresets, ...emPresets],

	// align-content
	// "space-between"

	bd: ['guide', 'emphasis'], // dashed?

	//bds: dashed, solid, double, dotted,

	bg: ['glass', 'stripe', 'grid'],
	z: ['-1', '0', '1'],
	inset: ['c', 'cX', 'cY'], // inset は 0% だけ
	aspect: ['16/9', '4/3', '3/2', '2/1', '1/1', 'golden', 'silver', 'bronze', 'ogp', 'cinema'], //'2/1',

	// fx: ['1'],
	gd: [
		//'side:l', 'side:r', 'side:s', 'side:e', '3row', '3col'
	],
	// gt: [],
	gtc: ['a1a'],
	gtr: ['a1a'],
	gta: [],
	// gc: ['1', '2', '3', 'span2'],
	// gr: ['1', '2', '3', 'span2'],
	// gcs: ['1', '2', '3'],
	// grs: ['1', '2', '3'],
	// gce: ['-1'],
	// gre: ['-1'],
	// ga: [
	// 	'side',
	// 	//'start', 'c', 'end'
	// ],
	gradient: ['sunset', 'blackToBottom'],
	// transform: ['flip:x', 'flip:y', 'flip:xy'],
	animation: [],

	contentSize: ['xs', 's', 'm', 'l', 'xl', 'full'], // container, constrained のユーティリティクラス
	flow: ['xs', 's', 'l'], // flowのユーティリティクラス
	// mbs: ['s', 'm', 'l'], // --mbs--xxx トークン
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
