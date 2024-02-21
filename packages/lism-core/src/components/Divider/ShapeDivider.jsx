// import React from 'react';
import { Lism } from '../Lism';
// import { Flex, FlexItem } from '../Flex';
// import { Decorator } from '../Decorator';
import ShapeDividerSVG from './ShapeDividerSVG';

// const animationTypes = {
// 	Wave1: 'loop',
// 	Wave2: 'lr',
// 	Wave3: 'lr',
// };

// aria-hidden="true"
// focusable="false"

// align: full, wide, ''
export default function ShapeDivider({
	lismClass = {},
	lismStyle = {},
	shape = 'wave1',
	isFlip,
	isAnimation,
	level = 5, // -10~10?
	stretch, // 1~2
	offset, // -25% ~ 25%

	// 旧
	type,
	position, // = 'bottom', // place?
	...props
}) {
	if (!shape) return null;
	if (level === 0) return null;

	lismClass.c = 'c--shapeDivider';
	// if (shape) lismClass.c += ` c--shapeDivider--shape`;

	// 旧type
	if (type) shape = type;

	// 旧 position
	if (position === 'top') isFlip = true;

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

	// const dataFlip = classnames(flipX && 'x', flipY && 'y');
	let dataFlip = '';
	if (flipX) dataFlip += 'x';
	if (flipY) dataFlip += 'y';

	// const transforms = [];
	// if (flipX) transforms.push('scaleX(-1)');
	// if (flipY) transforms.push('scaleY(-1)');

	if (dataFlip) props['data-flip'] = dataFlip;

	lismStyle = Object.assign(lismStyle, {
		'--level': level || null,
		'--offset': offset || null,
		'--stretch': stretch || null,
	});

	let svgClass = 'c--shapeDivider__svg';
	if (isAnimation) svgClass += ' -animation';
	svgClass += ' -d:b'; // -w:100 -h:100

	// const innerProps = {};
	// if (transforms.length) {
	// 	innerProps.css = {
	// 		transform: transforms.join(' '),
	// 	};
	// }
	return (
		<Lism skipState lismClass={lismClass} lismStyle={lismStyle} data-shape={shape} {...props}>
			<Lism skipState className='c--shapeDivider__inner -h:100'>
				<ShapeDividerSVG className={svgClass} shape={shape} level={level} />
			</Lism>
		</Lism>
	);
}
