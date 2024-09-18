import { Lism } from '../Lism';

export default function DialogFooter({ children, ...props }) {
	return (
		<Lism lismClass='d--modal__footer' {...props}>
			{children}
		</Lism>
	);
}
