import { Lism } from '@lism-ui/core';
import './style.css';

export default function Badge({ children, ...props }) {
	return (
		<Lism lismClass='c--button' tag='a' variant='fill' hov='fade' trs {...props}>
			{children}
		</Lism>
	);
}
