import { Stack, Frame, WithSide } from '@lism-ui/core';

export function Card({ layout, ...props }) {
	const Layout = layout || WithSide;

	const defaultProps = {
		lismClass: 'c--card',
		c: 'text',
		bgc: 'base',
		bdrs: '3',
		bxsh: '2',
		ov: 'h',
	};

	if (props.href) {
		defaultProps.tag = 'a';
		defaultProps.isLinkBox = true;
	}

	return <Layout {...defaultProps} {...props} />;
}

export function CardMedia(props) {
	return <Frame lismClass='c--card__media' {...props} />;
}

export function CardBody({ children, ...props }) {
	return (
		<Stack lismClass='c--card__body' {...props}>
			{children}
		</Stack>
	);
}
