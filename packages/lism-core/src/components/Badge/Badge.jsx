// import React from 'react';
import { Lism } from '../Lism';

// variant
export default function Badge({
	lismClass = {},
	// lismStyle = {},
	// lismState = [],
	variant,
	...props
}) {
	lismClass.c = 'c--badge';
	if (variant) lismClass.c += ` c--badge--${variant}`;

	return <Lism skipState tag='span' lismClass={lismClass} {...props} />;
}
