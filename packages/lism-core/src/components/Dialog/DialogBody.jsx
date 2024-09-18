import { Container } from '../Container';

export default function DialogBody({ children, ...props }) {
	return (
		<Container lismClass='d--modal__body' {...props}>
			{children}
		</Container>
	);
}
