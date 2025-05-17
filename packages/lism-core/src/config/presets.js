// ユーティリティクラス化するキーワード
export default {
	// tsh: ['black', 'white'],
	c: [
		'inherit',
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
		'inherit',
		'main',
		'accent',
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
		'inherit',
		'main',
		'accent',
		'mix',
		'divider',
		'keycolor',
		'mix',
		// 'cbox',
	],

	// ユーティリティ化
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

	// getStateで必要
	contentSize: ['xs', 's', 'm', 'l', 'xl', 'full'], // container, constrained のユーティリティクラス
	flow: ['xs', 's', 'l', 'xl'], // flowのユーティリティクラス
	// mbs: ['s', 'm', 'l'], // --mbs--xxx トークン
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
