import presets from './presets';
import atts from '../../lib/helper/atts';

/**
 * html文字列をminify
 */
export const minifyHtml = (html) => {
	if (!html) return '';

	// 改行先に削除
	html = html.replace(/\r?\n/g, '');

	// タブ → スペース
	html = html.replace(/\t/g, ' ');

	// 複数のスペースを１つに
	html = html.replace(/\s\s+/g, ' ');

	// タグとタグの間のスペースを削除
	html = html.replace(/> </g, '><');

	return html;
};

/**
 * svgをcssの image url に変換
 */
export const convertSvgToImgurl = (svg, encode) => {
	if (!svg) return '';

	// minify化
	svg = minifyHtml(svg);

	if ('base64' === encode) {
		// memo: btoa() だけだとマルチバイト文字が入った時にエラーになる。
		// encodeURIComponent() でそれを回避できるがそれだとSVGとして描画できず、 unescape() と組み合わせることで期待する動作になった。 see: https://www.softel.co.jp/blogs/tech/archives/4133
		// svg = window.btoa(unescape(encodeURIComponent(svg)));

		// memo: Buffer 使えば非推奨な関数を使わなくてもいい see: https://hackersheet.com/naopoyo/sheets/bvtrkwt
		svg = Buffer.from(svg).toString('base64');
		return `url(data:image/svg+xml;base64,${svg})`;
	} else {
		// カラーコードの先頭の # → %23 に置換
		svg = svg.replaceAll('="#', '="%23');
	}

	return `url('data:image/svg+xml;utf8,${svg}')`;
};

/*
Icon の出力パターン
  - icon = 文字列の場合→preset で登録されたsvgアイコンを呼び出す
( 廃止 ) - icon = 1に該当しない、かつ文字列の場合→ data-lism-icon 属性にアイコン名が出力される。（CSSでアイコンを描画できるようになっている）
  - icon = それ以外の場合、extends として振る舞う
  - tag=svg で指定された場合 → <svg> で出力し、childrenはそのまま返す。（<path> などを渡して使えるようにする）
  - as が指定された場合 → asで渡される外部コンポーネントを呼び出す
*/
export default function getProps({
	lismClass,
	isInline,
	variant,
	as,
	tag,
	scale,
	offset,
	emoji,
	mask,
	icon,
	label,
	style = {},
	exProps = {},
	...props
}) {
	// props.skipState = true;
	const iconClasses = [`a--icon`];
	if (isInline) iconClasses.push('a--icon--inline');
	if (variant) iconClasses.push(`a--icon--${variant}`);

	let Component = tag || 'span';

	// icon は初期値でセットされ得るので、mask, emojiの優先度を高くする
	// viewBoxがあれば、svg描画として扱う
	if (props.viewBox) {
		Component = 'svg';
	} else if (emoji) {
		iconClasses.push('a--icon--emoji');
	} else if (mask) {
		iconClasses.push('a--icon--mask');

		// maskが文字列で、かつ <svg で始まる場合
		if (typeof mask === 'string' && mask.startsWith('<svg')) {
			style['--icon-mask'] = convertSvgToImgurl(mask, 'base64');
		}
		//  else {
		// 	iconProps['data-lism-mask'] = mask;
		// }
	} else if (icon) {
		// icon が 文字列の場合、プリセットアイコンを呼び出す
		if (typeof icon === 'string') {
			// if (icon.startsWith('lism:')) {icon = icon.replace('lism:', '');}
			const presetIconData = presets[icon] || null;
			if (null != presetIconData) {
				Component = '_SVG_';
				exProps = { ...exProps, ...presetIconData };
			}
		} else if (typeof icon === 'object' && icon.as) {
			const { as: _as, ..._exProps } = icon;
			Component = _as;
			exProps = { ...exProps, ..._exProps };
		} else {
			Component = icon;
		}
	} else if (as) {
		Component = as;
	}

	// label の有無でaria属性を変える
	if (label) {
		exProps['aria-label'] = label;
		exProps['role'] = 'img';
	} else {
		exProps['aria-hidden'] = 'true';
	}

	// 専用変数
	if (scale) style['--scale'] = scale;
	if (offset) style['--offset'] = offset;

	props.lismClass = atts(lismClass, iconClasses);
	props.style = style;

	return { Component, lismProps: props, exProps, emoji };
}

// 子要素に Icon を持つコンポーネントが icon, iconProps で Icon 用の props を生成する処理
// export function getChildIconProps({ icon, iconProps }) {}
