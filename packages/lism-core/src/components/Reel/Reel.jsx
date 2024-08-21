import { Flex } from '../Flex';
import getReelProps from './getProps';

export default function Reel({ children, ...props }) {
	return <Flex {...getReelProps(props)}>{children}</Flex>;
}
