// import React from 'react';
import { Flex, Stack } from '../Flex';
import getReelProps from './getProps';

// snap-type, snap-stopも指定できるようにする？
export default function Reel({ isVertical, children, ...props }) {
	const Layout = isVertical ? Stack : Flex;
	return <Layout {...getReelProps(props)}>{children}</Layout>;
}
