import presets from './presets';

export default function getProps(
	{
		_lismClass = [],
		isInline,
		variant,
		// asProps = {}, // lismProps として処理しないデータ
		as,
		scale,
		size,
		name,
		preset,
		icon,
		label,
		style = {},
		...otherProps
	},
	hasChildren
) {
	_lismClass.push('e--icon');
	if (isInline) _lismClass.push('e--icon--inline');
	if (variant) _lismClass.push(`e--icon--${variant}`);
	otherProps._lismClass = _lismClass;

	if (scale) style['--scale'] = scale;
	otherProps.style = style;

	const iconProps = {};
	// label の有無でaria属性を変える
	if (label) {
		iconProps['aria-label'] = label;
		iconProps['role'] = 'img';
	} else {
		iconProps['aria-hidden'] = 'true';
	}

	let IconTag = as || 'span';

	// icon で指定された場合、 name, as に振り分ける
	if (icon) {
		if (typeof icon === 'string' && presets[icon]) {
			preset = icon;
		} else if (typeof icon === 'string') {
			name = icon;
		} else if (icon && typeof icon !== 'string') {
			IconTag = icon;
		}
	}

	// iconに ReactElement が渡されてきた場合、childrenとして扱う
	// if (isValidElement(icon)) {
	// 	children = icon;
	// }

	// プリセットアイコンが取得できるか
	const iconData = presets[preset] || null;

	if (null != iconData) {
		// プリセットアイコンが取得できる場合
		IconTag = '_SVG_';
		iconProps.viewBox = iconData?.viewBox;
		iconProps.path = iconData?.path;
	} else if (hasChildren) {
		// childrenがある場合 → <svg> として描画（childrenに <path> などを渡して使えるように）
		IconTag = '_SVG_';
	}

	// 外部コンポーネントを呼び出す場合
	if (IconTag !== 'span') {
		// sizeが指定されていれば 外部コンポーネント側に渡す
		if (size) iconProps.size = size;
	}
	// span[data-icon] で出力する場合
	else if (name) {
		iconProps['data-icon'] = name;

		// props.lismState = ['has--size'];
		if (size) otherProps.size = size; // size は lismProps として処理
	}

	return { IconTag, iconProps, otherProps };
}
