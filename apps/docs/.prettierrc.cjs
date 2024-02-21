// export default {
//   plugins: ["prettier-plugin-astro"],
//   overrides: [
//     {
//       files: "*.astro",
//       options: {
//         parser: "astro",
//       },
//     },
//   ],
// };

module.exports = {
	// plugins: ['prettier-plugin-astro'],
	tabWidth: 4,
	singleQuote: true, //シングルクォートに統一
	jsxSingleQuote: true, //JSXでもシングルクォートに統一。
	trailingComma: 'es5', //末尾のカンマをどうすか。es5に準拠させる（オブジェクトの末尾は , つける）
	printWidth: 100, //何文字で改行するかデフォルトは80?
	semi: true, //末尾にセミコロンをつけるかどうか。
	bracketSpacing: true, //オブジェクトの{}の内側にスペースをいれるかどうか。
	arrowParens: 'always', //アロー関数の () を省略しない
	// editorconfig: true, //editorconfigの設定に従う

	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
