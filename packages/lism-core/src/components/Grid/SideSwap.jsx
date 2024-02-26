// import React from 'react';
import Grid from './Grid';
import { getSideSwapProps } from './getProps';
export default function SideSwap(props) {
	return <Grid variant='swap' {...getSideSwapProps(props)} />;
}
