import { Frame } from '../Frame';
import { getCardMediaProps } from './getProps';

export default function CardMedia({ children, ...props }) {
	return <Frame {...getCardMediaProps(props)}>{children}</Frame>;
}
