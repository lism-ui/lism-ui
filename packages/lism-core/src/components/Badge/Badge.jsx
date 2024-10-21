import { Lism } from '../Lism';
import getProps from './getProps';

export default function Badge({ children, ...props }) {
	return <Lism {...getProps(props)}>{children}</Lism>;
}
