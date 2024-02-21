import Flex from './Flex';
import { getSideFlexProps } from './getProps';

export default function SideFlex(props) {
	return <Flex _flex='sideFlex' {...getSideFlexProps(props)} />;
}
