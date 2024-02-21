import { Frame } from '../Frame';
import getProps from './getProps';

export default function Banner(props) {
	return <Frame {...getProps(props)} />;
}
