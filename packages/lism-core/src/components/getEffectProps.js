export default function getEffectProps(props) {
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
