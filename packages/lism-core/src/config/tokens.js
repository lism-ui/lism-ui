// const spacingPresets = ['0', '5', '10', '15', '20', '30', '40', '50'];

// PRESETS
export default {
	p: ['box', 'box:s', 'box:l'],
	fz: [
		'root',
		'5xl',
		'4xl',
		'3xl',
		'2xl',
		'xl',
		'l',
		'm',
		's',
		'xs',
		'2xs',
		// 'fluid',
		// 'fluid:s',
		// 'fluid:l',
	],
	// lh: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
	lh: ['root', '2xs', 'xs', 's', 'l', 'xl', '2xl'],
	lts: ['root', '2xs', 'xs', 's', 'l', 'xl', '2xl'], //['-3', '-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7'],
	ff: ['root', 'mono', 'emoji', 'sans', 'serif'],
	fw: ['bold', 'thin'],

	// space: ['0', '5', '10', '15', '20', '25', '30', '40', '50', '60', '70', '80', '90', '100'],
	// em: ['1', '2', '3', '4', '5', '10', '15', '20', '25', '30'],
	// p: ['box', 'box:s', 'box:l'],

	radius: ['full', '2xl', 'xl', 'l', 'm', 's', 'xs'],
	shadow: ['-1', '-2', '-3', '-4', '-5', '1', '2', '3', '4', '5', '0'],

	// size:['container', 'container:s', 'container:l'],
	contentSize: ['xs', 's', 'm', 'l', 'xl', 'item'], // --contentSize--xxx トークン
	size: [],

	// --変数化できるキーワード
	color: [
		'base',
		'base-2',
		'base-3',
		'content',
		'content-2',
		'content-3',
		'main',
		'accent',
		'accent-2',
		'accent-3',
		'red',
		'blue',
		'green',
		'yellow',
		'purple',
		'orange',
		'pink',
		'white',
		'black',
		'gray',
	],
	filter: ['blur', 'blur:s', 'blur:l', 'darken', 'lighten'],
};

// ユーティリティ化しないけど、変数を用意しておくもの
// export const VAR_PRESETS = {
// 	color: ['bg', 'text', 'link', 'headline'],
// };
