import filterEmptyObj from '../lib/helper/filterEmptyObj';

export default function separateMediaAttrs({
	src,
	alt,
	width,
	height,
	loading,
	decoding,
	loop,
	muted,
	controls,
	autoplay,
	playsinline,
	poster,
	// objectFit,
	// objectPosition,
	hover,
	...props
}) {
	return {
		mediaAttrs: filterEmptyObj({
			src,
			alt,
			width,
			height,
			loading,
			decoding,
			loop,
			muted,
			controls,
			autoplay,
			playsinline,
			poster,
			// objectFit,
			// objectPosition,
			hover,
		}),
		otherProps: props,
	};
}
