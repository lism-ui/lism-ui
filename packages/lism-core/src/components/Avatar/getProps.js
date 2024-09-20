import atts from '../../lib/helper/atts';
import separateMediaAttrs from '../separateMediaAttrs';

export default function getAvatarProps({
	lismClass,
	variant,
	mediaProps = {},
	size,
	style = {},
	...props
}) {
	if (size) style['--size'] = size;

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return {
		avatarProps: {
			lismClass: atts(lismClass, 'b--avatar', variant && `b--avatar--${variant}`),
			bdrs: 'full',
			style,
			...otherProps,
		},
		mediaProps: {
			width: '100%',
			height: '100%',
			decoding: 'async',
			// objectFit:'cover',
			...mediaAttrs,
			...mediaProps,
		},
	};
}
