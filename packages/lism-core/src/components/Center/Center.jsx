// import React from 'react';
import { Grid } from '../Grid';

export default function Center({ size, ...props }) {
	// lismClass.l = `l--center`;
	props['_grid'] = 'center';

	if (size === 'cover') {
		props = Object.assign(
			{
				minW: '100%',
				minH: '100%',
				// ovy: 'auto',
			},
			props
		);
	} else if (size === 'content') {
		props = Object.assign(
			{
				w: 'fit-content',
				h: 'fit-content',
				mx: 'auto',
			},
			props
		);
	}
	return <Grid {...props} />;
}
