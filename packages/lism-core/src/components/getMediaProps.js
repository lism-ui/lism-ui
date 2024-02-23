import isEmptyObj from '../lib/helper/isEmptyObj';
import filterEmptyObj from '../lib/helper/filterEmptyObj';

export default function getMediaProps({ objectFit, objectPosition, ...props }) {
	const mediaProps = filterEmptyObj({
		objectFit,
		objectPosition,
	});

	if (!isEmptyObj(mediaProps)) {
		props.css = Object.assign({}, props.css || {}, mediaProps);
	}

	return props;
}
