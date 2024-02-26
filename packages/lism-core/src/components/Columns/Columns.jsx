// import React from 'react';
import { Grid } from '../Grid';
import getProps from './getProps';

// PRESET '1-2-3' 1-2, 1-2-4 ?
// clms, cols, repeat
export default function Columns(props) {
	return <Grid _grid='columns' {...getProps(props)} />;
}
