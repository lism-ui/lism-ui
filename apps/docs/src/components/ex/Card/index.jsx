import { Grid, Flex, Stack, Frame, FlexItem, LinkBox, WithSide } from '@lism-ui/core';

export function Card({ layout, direction, children, ...props }) {
	// let CardLayout = FlexItem; //isFlex ? Flex : Stack;

	let CardLayout = layout || WithSide;

	if (layout === 'Flex') {
		CardLayout = Flex;
	} else if (layout === 'Stack') {
		CardLayout = Stack;
	}

	if (props.href) {
		props.layout = CardLayout;
		CardLayout = LinkBox;
	}

	return (
		<CardLayout lismClass='c--card' bgc='base' bdrs='3' bxsh='2' ov='h' {...props}>
			{children}
		</CardLayout>
	);
}

// linkbox版
export function CardLink(props) {
	return <LinkBox layout={Card} {...props} />;
}

export function CardMedia(props) {
	const defaultProps = {}; // ov: 'h'
	// fxsh='0' は、横並びにした時用。
	// if (!props.isSide) defaultProps.fxsh = '0';
	return <FlexItem lismClass='c--card__media' layout={Frame} {...defaultProps} {...props} />;
}

export function CardBody({ children, ...props }) {
	return (
		<FlexItem lismClass='c--card__body' layout={Stack} {...props}>
			{children}
		</FlexItem>
	);
}
