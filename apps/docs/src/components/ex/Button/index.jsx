import { Lism } from '@lism-ui/core';
import './style.css';

export default function Badge({ children, ...props }) {
	return (
		<Lism lismClass='b--button' tag='a' variant='fill' hov='fade' {...props}>
			{children}
		</Lism>
	);
}
