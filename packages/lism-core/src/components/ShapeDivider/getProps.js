export function getShapeDividerProps({
	_lismClass = [],
	style = {},
	variant,
	shape = 'wave1',
	isFlip,
	isAnimation,
	level = 5, // -10~10?
	stretch, // 1~2
	offset, // -25% ~ 25%
	...props
}) {
	_lismClass.push('c--shapeDivider');
	if (isAnimation) _lismClass.push('c--shapeDivider--animation');
	if (variant) _lismClass.push(`c--divider--${variant}`);

	props._lismClass = _lismClass;

	let flipX = isFlip; // X(垂直)方向の反転 ↔
	let flipY = isFlip; // Y(水平)方向の反転 ↕

	// 1文字目を大文字にする
	shape = shape.charAt(0).toUpperCase() + shape.slice(1);
	if (level < 0) {
		level = level * -1; // 正の値にする

		// shape が "Circle", "Arrow" で始まるときはsvgファイルを変更する
		if (shape.match(/^(Circle|Arrow)/)) {
			shape += '_R';
		} else {
			flipX = !flipX; // それ以外は左右反転する
		}
	}
	props.shape = shape;

	// const dataFlip = classnames(flipX && 'x', flipY && 'y');
	let dataFlip = '';
	if (flipX) dataFlip += 'x';
	if (flipY) dataFlip += 'y';

	// const transforms = [];
	// if (flipX) transforms.push('scaleX(-1)');
	// if (flipY) transforms.push('scaleY(-1)');

	if (dataFlip) props['data-flip'] = dataFlip;

	style = Object.assign(style, {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	});
	props.style = style;

	return props;
}

export const svgDefaultProps = {
	id: null,
	xmlSpace: null,
	'aria-hidden': 'true',
	focusable: 'false',
	preserveAspectRatio: 'none',
	width: '100%',
	height: '100%',
	style: null,
};
