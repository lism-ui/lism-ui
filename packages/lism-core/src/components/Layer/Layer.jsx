// import React from 'react';
import { Lism, Media } from '../Lism';
// import { Frame } from '../Frame';
import { getLayerProps } from './getProps';
import separateMediaAttrs from '../separateMediaAttrs';

export default function Layer(props) {
	if (props?.src) {
		const { mediaAttrs, otherProps } = separateMediaAttrs(props);
		return (
			<Lism isFrame {...getLayerProps(otherProps)}>
				<Media {...mediaAttrs} />
			</Lism>
		);
	}
	return <Lism {...getLayerProps(props)} />;
}
