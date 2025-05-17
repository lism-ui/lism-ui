import { Lism } from '../Lism';
import getProps from './getProps';

export default function List({ children, ...props }) {
	return (
		<Lism tag='ul' {...getProps(props)}>
			{children}
		</Lism>
	);
}
