// import React from 'react';
import { Lism, Media } from '../Lism';
import { Frame } from '../Frame';
import { getLayerProps } from './getProps';
import separateMediaAttrs from '../separateMediaAttrs';

export default function Layer(props) {
	if (props?.src) {
		const { mediaAttrs, otherProps } = separateMediaAttrs(props);
		return (
			<Frame {...getLayerProps(otherProps)}>
				<Media {...mediaAttrs} />
			</Frame>
		);
	}
	return <Lism {...getLayerProps(props)} />;
}
