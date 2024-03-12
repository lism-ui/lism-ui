import separateMediaAttrs from '../separateMediaAttrs';

export default function getAvatarProps({
	_lismClass = [],
	// lismState = [],
	variant,
	mediaProps = {},
	size,
	style = {},
	...props
}) {
	_lismClass.push('c--avatar');
	if (variant) _lismClass.push(`c--avatar--${variant}`);

	if (size) style['--size'] = size;
	props.style = style;

	const defaultMediaProps = {
		width: '100%',
		height: '100%',
		decoding: 'async',
		// objectFit='cover'
	};

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return {
		avatarProps: { _lismClass, aspect: '1/1', bdrs: 'full', ...otherProps },
		mediaProps: {
			...defaultMediaProps,
			...mediaAttrs,
			...mediaProps,
		},
	};
}
