import TOKENS from './tokens';

const spacingPresets = ['0', '5', '10', '20', '30', '40', '50'];

// ユーティリティクラス化するキーワード
export default {
	fz: TOKENS.fz,
	lh: ['1', ...TOKENS.lh], // 検討
	lts: TOKENS.lts,
	ff: ['base', 'accent', 'mono'],
	// fw: TOKENS.fw,
	// tsh: ['black', 'white'],
	c: [
		'main',
		'accent',
		'base',
		'text',
		'text-2',
		'keycolor',
		'mix',
		'black',
		'white',
		// 'cbox',
	],
	bgc: [
		'main',
		// 'accent',
		'base',
		'base-2',
		'base-3',
		'text',
		'keycolor',
		'mix',
		'black',
		'white',
		// 'cbox',
	],
	bdc: [
		'main',
		//'accent',
		'mix',
		'divider',
		// 'table',
		'keycolor',
		'mix',
		// 'cbox',
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
	gap: spacingPresets,

	// align-content
	// "space-between"

	// bd: [], // dashed?
	//bds: dashed, solid, double, dotted,

	// inset: ['c', 'cX', 'cY'], // inset は 0% だけ

	// fx: ['1'],
	// gt: [],
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
	gradient: [],
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
