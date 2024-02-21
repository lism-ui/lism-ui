// import React from 'react';
import { Lism } from '../Lism';

export default function DecoBox({ lismClass = {}, ...props }) {
	lismClass.c = 'c--decoBox';

	return <Lism lismClass={lismClass} {...props} />;
}
