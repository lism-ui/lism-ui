// import React from 'react';
import Grid from './Grid';

export default function SideSwap({
	lismStyle = {},
	lismState = [],
	sideW,
	side = 'end bottom', // "start top"|"start bottom"|"end top"|"end bottom"
	bp = 'sm',
	// customBreakPoint,
	...props
}) {
	if (undefined !== sideW) {
		lismStyle['--sideW'] = sideW;
	}

	// const lismState = [];
	if (bp) lismState.push('-gt@' + bp);

	// if (customBreakPoint) {
	// 	blockProps['data-break'] = 'custom';
	// 	blockProps['data-custom-break'] = customBreakPoint;
	// }

	return (
		<Grid
			variant='swap'
			lismStyle={lismStyle}
			lismState={lismState}
			data-side={side}
			{...props}
		/>
	);
}
