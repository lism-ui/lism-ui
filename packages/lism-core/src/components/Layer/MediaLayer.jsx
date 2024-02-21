// import React from 'react';
import Layer from './Layer';
import { Media } from '../Lism';
import { Frame } from '../Frame';
import { separateMediaAttrs } from '../../lib';

// memo: picture対応
export default function MediaLayer({ media = 'img', hover, children, ...props }) {
	const { mediaAttrs, otherProps } = separateMediaAttrs(props);

	if (children) {
		return (
			<Frame layout={Layer} variant='media' hover={hover} {...otherProps}>
				{children}
			</Frame>
		);
	}

	return (
		<Frame layout={Layer} variant='media' {...otherProps}>
			<Media as={media} hover={hover} loading='lazy' decoding='async' {...mediaAttrs} />
		</Frame>
	);
}
