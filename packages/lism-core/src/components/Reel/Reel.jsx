import { Flex } from '../Flex';
import getReelProps from './getProps';

export default function Reel({ children, ...props }) {
	return (
		<Flex _flex='reel' {...getReelProps(props)}>
			{children}
		</Flex>
	);
}
