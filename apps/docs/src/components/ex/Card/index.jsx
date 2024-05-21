import { Flex, Stack, Frame, FlexItem, LinkBox } from '@lism-ui/core';

export function Card({ isFlex, children, ...props }) {
	let CardLayout = isFlex ? Flex : Stack;
	return (
		<CardLayout className='c--card' bgc='base' bdrs='m' bxsh='2' ov='h' {...props}>
			{children}
		</CardLayout>
	);
}

// linkbox版
export function CardLink(props) {
	return <LinkBox layout={Card} {...props} />;
}

export function CardMedia(props) {
	// fxsh='0' は、横並びにした時用。
	return <FlexItem layout={Frame} fxsh='0' ov='h' {...props} />;
}

export function CardBody({ children, ...props }) {
	return (
		<FlexItem layout={Stack} fxg='1' p='box' gap='10' {...props}>
			{children}
		</FlexItem>
	);
}
