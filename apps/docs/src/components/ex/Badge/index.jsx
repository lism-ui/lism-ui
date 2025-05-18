import { Lism } from '@lism-ui/core';
import './style.css';

export default function Badge({ children, ...props }) {
	return (
		<Lism lismClass='b--badge' tag='span' px='20' bdrs='1' {...props}>
			{children}
		</Lism>
	);
}
