import { Lism } from '../Lism';
import getOverlayLinkProps from './getProps';

export default function LinkBox({ children, ...props }) {
	return <Lism {...getOverlayLinkProps(props)}>{children}</Lism>;
}
