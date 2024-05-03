import { LinkBox } from '../LinkBox';
import getProps from './getProps';

export default function Banner(props) {
	return <LinkBox isFrame {...getProps(props)} />;
}
