// import React from 'react';
import { LinkBox } from '../LinkBox';
import { Flex, Stack } from '../Flex';
import { getCardProps } from './getProps';

export default function Card({ isFlex, children, ...props }) {
	let CardLayout = isFlex ? Flex : Stack;

	// href あり
	if (props.href) {
		return (
			<LinkBox layout={CardLayout} {...getCardProps(props)}>
				{children}
			</LinkBox>
		);
	}

	// href 指定なし
	return <CardLayout {...getCardProps(props)}>{children}</CardLayout>;
}
