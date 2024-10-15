import { Flex, Stack, Frame, FlexItem, WithSide } from '@lism-ui/core';

export function Card({ layout, children, ...props }) {
	const defaultProps = {
		bgc: 'base',
		c: 'text',
		bdrs: '3',
		bxsh: '2',
		ov: 'h',
	};

	let CardLayout = layout || WithSide;
	if (layout === 'Flex') {
		CardLayout = Flex;
	} else if (layout === 'Stack') {
		CardLayout = Stack;
	}

	if (props.href) {
		defaultProps.tag = 'a';
		defaultProps.isLinkBox = true;
	}

	return (
		<CardLayout lismClass='c--card' {...defaultProps} {...props}>
			{children}
		</CardLayout>
	);
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
