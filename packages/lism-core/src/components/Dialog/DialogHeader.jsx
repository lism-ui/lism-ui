import { Lism } from '../Lism';

export default function DialogHeader({ children, ...props }) {
	return (
		<Lism lismClass='d--modal__header' {...props}>
			{children}
		</Lism>
	);
}
