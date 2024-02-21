import { isEmptyObj, filterEmptyObj } from './helper';

export function getInsetProps(props) {
	if (null == props.insets) props.insets = {};

	['inset', 'l', 'r', 't', 'b', 'is', 'ie', 'bs', 'be'].forEach((key) => {
		if (null != props[key]) {
			props.insets[key] = props[key];
			delete props[key];
		}
	});

	return props;
}

export function getEffectProps(props) {
	if (null == props.css) props.css = {};
	[
		'transform',
		'transformOrigin',
		'translate',
		'rotate',
		'scale',
		'clipPath',
		'backdropFilter',
	].forEach((key) => {
		if (null != props[key]) {
			props.css[key] = props[key];
			delete props[key];
		}
	});

	return props;
}

export function getMediaProps({ objectFit, objectPosition, ...props }) {
	const mediaProps = filterEmptyObj({
		objectFit,
		objectPosition,
	});

	if (!isEmptyObj(mediaProps)) {
		props.css = Object.assign({}, props.css || {}, mediaProps);
	}

	return props;
}
