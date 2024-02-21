// import React from 'react';
import { Lism } from '../Lism';
import { getLayerProps } from './getProps';

export default function Layer(props) {
	return <Lism {...getLayerProps(props)} />;
}
