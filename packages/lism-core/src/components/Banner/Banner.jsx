import { LinkBox } from '../LinkBox';
import { Frame } from '../Frame';
import getProps from './getProps';

export default function Banner(props) {
	return <LinkBox layout={Frame} {...getProps(props)} />;
}
