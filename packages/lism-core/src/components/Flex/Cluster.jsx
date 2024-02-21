// import React from 'react';
import Flex from './Flex';
import { getClusterProps } from './getProps';

export default function Cluster(props) {
	return <Flex _flex='cluster' {...getClusterProps(props)} />;
}

// セパレーターを項目間に追加する
// see: https://react.dev/reference/react/Children#running-some-code-for-each-child
