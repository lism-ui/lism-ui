// import React from 'react';
import Layer from './Layer';
import { Media } from '../Lism';
import { Frame } from '../Frame';
import separateMediaAttrs from '../separateMediaAttrs';

// memo: picture対応
export default function MediaLayer({ media = 'img', hov, children, ...props }) {
	const { mediaAttrs, otherProps } = separateMediaAttrs(props);

	if (children) {
		return (
			<Frame layout={Layer} variant='media' hov={hov} {...otherProps}>
				{children}
			</Frame>
		);
	}

	return (
		<Frame layout={Layer} variant='media' {...otherProps}>
			<Media as={media} hov={hov} loading='lazy' decoding='async' {...mediaAttrs} />
		</Frame>
	);
}
