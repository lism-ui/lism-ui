import { Stack } from '../Flex';
import { getCardBodyProps } from './getProps';
export default function CardBody({ layout, ...props }) {
	const Component = layout || Stack;
	return <Component {...getCardBodyProps(props)} />;
}
