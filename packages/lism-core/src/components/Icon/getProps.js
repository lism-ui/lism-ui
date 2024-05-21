import presets from './presets';

/*
Icon の出力パターン
1. icon = preset で登録されたアイコン名 と一致する場合 → <svg> で出力
2. icon = 1に該当しない、かつ文字列の場合→ data-icon 属性にアイコン名が出力される。（CSSでアイコンを描画できるようになっている）
3. icon = 1,2にも該当しない場合 → 外部コンポーネントとして呼び出す（asでの指定と一緒）
2. tag=svg で指定された場合 → <svg> で出力し、childrenはそのまま返す。（<path> などを渡して使えるようにする）
2. as が指定された場合 → asで渡される外部コンポーネントを呼び出す
*/
export default function getProps({
	_lismClass = [],
	isInline,
	variant,
	as,
	tag,
	scale,
	size,
	emoji,
	icon,
	dataIcon,
	label,
	style = {},
	...otherProps
}) {
	_lismClass.push('a--icon');
	if (isInline) _lismClass.push('a--icon--inline');
	if (emoji) _lismClass.push('a--icon--emoji');
	if (variant) _lismClass.push(`a--icon--${variant}`);
	otherProps._lismClass = _lismClass;

	if (scale) style['--scale'] = scale;
	otherProps.style = style;

	let IconComponent = as || null;
	let iconTag = tag || 'span';
	const iconProps = {};
	// label の有無でaria属性を変える
	if (label) {
		iconProps['aria-label'] = label;
		iconProps['role'] = 'img';
	} else {
		iconProps['aria-hidden'] = 'true';
	}

	// let iconTag = as || 'span';

	// icon で指定された内容によって出力を変える
	let presetName = '';
	if (icon) {
		// icon が lism: で始まる場合 → プリセットアイコンを呼び出す
		if (typeof icon === 'string') {
			if (icon.startsWith('lism:')) {
				presetName = icon.replace('lism:', '');
			} else {
				dataIcon = icon;
			}
		} else if (icon) {
			IconComponent = icon;
		}
	}

	// iconに ReactElement が渡されてきた場合、childrenとして扱う
	// if (isValidElement(icon)) {
	// 	children = icon;
	// }

	// プリセットアイコンが取得できるか
	if (presetName) {
		const presetIconData = presets[presetName] || null;
		if (null != presetIconData) {
			iconTag = 'svg';
			iconProps.viewBox = presetIconData?.viewBox;
			iconProps.path = presetIconData?.path;
		}
	}

	//  else if (hasChildren) {
	// 	// childrenがある場合 → <svg> として描画（childrenに <path> などを渡して使えるように）
	// 	iconTag = 'svg';
	// }

	// 外部コンポーネントを呼び出す場合
	if (null != IconComponent || 'svg' === iconTag) {
		// size は 外部コンポーネント側に渡す
		if (size) iconProps.size = size;
	}
	// span[data-icon] で出力する場合
	else if (dataIcon) {
		iconProps['data-icon'] = dataIcon;
	}

	return { IconComponent, iconTag, iconProps, emoji, otherProps };
}
