import { Flex } from '../Flex';
import { getTabListProps } from './getProps';
export default function TabList(props) {
	return <Flex {...getTabListProps(props)} />;
}
