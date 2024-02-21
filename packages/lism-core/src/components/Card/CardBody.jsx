import { Stack } from '../Flex';

export default function CardBody({ lismClass = {}, as, ...props }) {
	const Component = as || Stack;
	lismClass.c = 'c--card__body';
	return <Component lismClass={lismClass} p='box' gap={as ? null : 20} {...props} />;
}
