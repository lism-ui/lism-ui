import { separateMediaAttrs } from '../../lib';

export default function getAvatarProps({
	_lismClass = [],
	// lismState = [],
	variant,
	mediaProps = {},
	...props
}) {
	_lismClass.push('c--avatar');
	if (variant) _lismClass.push(`c--avatar--${variant}`);

	const { mediaAttrs, otherProps } = separateMediaAttrs(props);
	return {
		avatarProps: { _lismClass, aspect: '1/1', bdrs: 'full', ...otherProps },
		mediaProps: {
			...mediaAttrs,
			...mediaProps,
		},
	};
}
