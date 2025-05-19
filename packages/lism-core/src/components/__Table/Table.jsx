import { Lism } from '../Lism';
import getProps from './getProps';

export default function Table({ children, ...props }) {
	return (
		<Lism tag='table' {...getProps(props)}>
			{children}
		</Lism>
	);
}
