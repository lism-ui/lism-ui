/* eslint no-console: 0 */
const path = require('path');
const fs = require('fs');

// glob
// const glob = require('glob');

// node-sass
// const sass = require('node-sass');
const sass = require('sass');
// const globImporter = require('node-sass-glob-importer');

// postcss
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const mqpacker = require('css-mqpacker');

// https://www.npmjs.com/package/postcss-merge-at-rules
// const mergeAtRules = require('postcss-merge-at-rules');

// consoleの色付け
const COLOR = {
	red: '\u001b[31m',
	green: '\u001b[32m',
	reset: '\x1b[0m',
};

// 環境変数・引数
// const envTYPE = process.env.TYPE || '';
// const TARGET_DIR = process.argv[2] || '';

(async () => {
	// パス
	let src = 'src/scss';
	let dist = 'dist/css';
	// const ignore = ['**/_*.scss'];
	let files = [];
	files = [
		src + '/all_with_layout.scss',
		src + '/all.scss',
		// src + '/core-modules.scss',
		// src + '/block-modules.scss',

		// src + '/base--wp.scss',
		// src + '/components.scss',
	];

	// files = glob.sync(src + '/**/*.scss', { ignore });
	// files = [src + '/base.scss', src + '/base--wp.scss', src + '/components.scss'];

	for (const filePath of files) {
		console.log(COLOR.green + 'Start sassRender: ' + COLOR.reset + filePath);

		const fileName = filePath.replace(src + '/', '');
		const srcPath = path.resolve(__dirname, src, fileName);
		const distPath = path.resolve(__dirname, dist, fileName).replace('.scss', '.css');

		// dart sass コンパイル
		try {
			const resultCSS = sassRender(srcPath);
			// console.log(resultCSS);

			// postcss実行
			postcss([
				// mergeAtRules({
				// 	atRulePattern: /(media|layer|supports|container)/im,
				// 	nest: true,
				// }),
				autoprefixer,
				cssnano,
			])
				.process(resultCSS, { from: undefined })
				.then((postcssResult) => {
					writeCSS(distPath, postcssResult.css);
					// if (postcssResult.map) {fs.writeFile('dest/app.css.map', postcssResult.map.toString(), () => true);}
				});

			// console.log(COLOR.green + 'Completed.');
		} catch (error) {
			console.log(COLOR.red + '\n========== ! ERROR ==========' + COLOR.reset);
			console.log(error);
			console.log(COLOR.red + '========== / ERROR ========== \n' + COLOR.reset);
		}
	}
})();

function sassRender(srcPath) {
	// globImporter() 使うために レガシー API （ sass.renderSync ） を使う
	// const compressed = sass.renderSync({
	// 	file: srcPath,
	// 	importer: globImporter(),
	// 	outputStyle: 'compressed',
	// });

	const result = sass.compile(srcPath, {
		style: 'compressed',
	});

	return result.css;
}

// 書き出し処理
function writeCSS(filePath, css) {
	const dir = path.dirname(filePath);

	// ディレクトリがなければ作成
	if (!fs.existsSync(dir)) {
		console.log('mkdir ' + dir);
		fs.mkdirSync(dir, { recursive: true });
	}

	// css書き出し
	// console.log('Wrote CSS to ' + filePath);
	fs.writeFileSync(filePath, css);
}
