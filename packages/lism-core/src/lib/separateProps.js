import { filterEmptyObj } from './helper';

export const separateLinkProps = (props) => {
	let { href, target, openNewTab, rel, ...otherProps } = props;
	target = target || openNewTab ? '_blank' : null;
	if (target === '_blank' && !rel) rel = 'noopener noreferrer';

	const linkProps = { href, target, rel };
	return { linkProps, otherProps };
};

export function separateMediaAttrs({
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
