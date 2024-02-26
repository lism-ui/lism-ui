import { Lism } from '../Lism';
import getProps from './getProps';

export default function Badge(props) {
	return <Lism {...getProps(props)} />;
}
