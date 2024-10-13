// import React from 'react';
import { Lism } from '../Lism';
import getProps from './getProps';

// 省略可能にするかどうかは、要検討
export default function Delimiter(props) {
	return <Lism {...getProps(props)} />;
}
