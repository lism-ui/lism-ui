import atts from '../../lib/helper/atts';

export function getShapeDividerProps({
	lismClass = '',
	style = {},
	variant,
	shape = 'wave1',
	isFlip,
	shapeFlip = '',
	isAnimation,
	level = 5, // -10~10?
	stretch, // 1~2
	offset, // -25% ~ 25%
	...props
}) {
	props.lismClass = atts(lismClass, 'b--shapeDivider');
	if (variant) props.lismClass += ` b--shapeDivider--${variant}`;

	if (isAnimation) props['data-shape-animation'] = '1';

	if (isFlip) shapeFlip = 'xy';

	// let flipX = isFlip; // X(垂直)方向の反転 ↔
	// let flipY = isFlip; // Y(水平)方向の反転 ↕

	// 1文字目を大文字にする
	shape = shape.charAt(0).toUpperCase() + shape.slice(1);
	if (level < 0) {
		level = level * -1; // 正の値にする

		// shape が "Circle", "Arrow" で始まるときはsvgファイルを変更する
		if (shape.match(/^(Circle|Arrow)/)) {
			shape += '_R';
		} else {
			// それ以外はx(左右）反転する
			// shapeFlipに'x'含まれているなら削除、なければ追加
			if (shapeFlip.includes('x')) {
				shapeFlip = shapeFlip.replace('x', '');
			} else {
				shapeFlip += 'x';
			}
		}
	}

	// // const shapeFlip = classnames(flipX && 'x', flipY && 'y');
	// let shapeFlip = '';
	// if (flipX) shapeFlip += 'x';
	// if (flipY) shapeFlip += 'y';

	// const transforms = [];
	// if (flipX) transforms.push('scaleX(-1)');
	// if (flipY) transforms.push('scaleY(-1)');

	if (shapeFlip) props['data-shape-flip'] = shapeFlip;

	style = Object.assign(style, {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	});
	props.style = style;

	return { shape, props };
}

export const svgDefaultProps = {
	id: null,
	xmlSpace: null,
	'aria-hidden': 'true',
	focusable: 'false',
	preserveAspectRatio: 'none',
	width: '100%',
	height: '100%',
	fill: 'currentColor',
	style: null,
};
