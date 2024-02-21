// import React from 'react';
import { Frame } from '../Frame';
export default function CardMedia({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--card__media';
	return (
		<Frame skipState lismClass={lismClass} {...props}>
			{/* <MediaLayer> */}
			{children}
			{/* </MediaLayer> */}
		</Frame>
	);
}
