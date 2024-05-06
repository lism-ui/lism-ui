import getEffectProps from '../getEffectProps';
import getInsetProps from '../getInsetProps';

// l,r,t,b, translate をそのまま受け取れる
export function getLayerPositions(position) {
	const props = {};
	if (position === 'center' || position === 'center center') {
		props.inset = 'center';
		// props.left = '50%';
		// props.top = '50%';
		// props.translate = '-50% -50%';
	} else if (position) {
		let hasX = false;
		let hasY = false;

		if (position.indexOf('left') !== -1) {
			props.left = '0';
			hasX = true;
		} else if (position.indexOf('right') !== -1) {
			props.right = '0';
			hasX = true;
		}

		if (position.indexOf('top') !== -1) {
			props.top = '0';
			hasY = true;
		} else if (position.indexOf('bottom') !== -1) {
			props.bottom = '0';
			hasY = true;
		}

		if (position.indexOf('center') !== -1) {
			if (hasY) {
				props.inset = 'centerX';
				// props.left = '50%';
				// props.translate = '-50%';
			} else if (hasX) {
				props.inset = 'centerY';
				// props.top = '50%';
				// props.translate = '0 -50%';
			}
		}
	}

	// if ('contain' === size) {
	// 	props.maxW = '100%';
	// 	props.maxH = '100%';
	// 	props.ov = 'auto';
	// }

	return props;
}

// l,r,t,b, translate をそのまま受け取れる
export function getLayerProps(props) {
	const { _lismClass = [], variant, position, ...otherProps } = props;

	_lismClass.push('l--layer');
	if (variant) _lismClass.push('l--layer--' + variant);

	// positon から得られたデータを props とマージ
	const positionProps = getLayerPositions(position);
	let layerProps = Object.assign({}, positionProps, otherProps);

	layerProps = getInsetProps(layerProps); // l,r,t,b などのコンテキストpropsのマージ
	layerProps = getEffectProps(layerProps); // effect系propsのマージ

	layerProps._lismClass = _lismClass;
	return layerProps;
}

const FILTERS = [
	'blur',
	'contrast',
	'brightness',
	'drop-shadow',
	'grayscale',
	'hue-rotate',
	'invert',
	// 'opacity',
	'saturate',
	'sepia',
];

export function getFilterLayerProps({ css = {}, ...props }) {
	const backdropFilters = [];

	if (null == css.backdropFilter) {
		FILTERS.forEach((filterName) => {
			if (props[filterName]) {
				backdropFilters.push(`${filterName}(${props[filterName]})`);
				delete props[filterName];
			}
		});

		if (backdropFilters.length > 0) {
			css.backdropFilter = backdropFilters.join(' ');
		}
	}

	props.css = css;

	return props;
}
