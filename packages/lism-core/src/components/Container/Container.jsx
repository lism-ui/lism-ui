// import React from 'react';
import { Lism } from '../Lism';
// import getProps from './getProps';
// export default function Container({ layout, ...props }) {
// 	const Layout = layout || Lism;
// 	return <Layout {...getProps(props)} />;
// }
export default function Container({ size = true, layout, ...props }) {
	const Layout = layout || Lism;
	return <Layout isContainer={size} {...props} />;
}
