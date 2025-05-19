import { Lism } from '@lism-ui/core';
import './style.css';

export default function Badge({ children, ...props }) {
	return (
		<Lism lismClass='c--badge' tag='span' px='20' bdrs='2' {...props}>
			{children}
		</Lism>
	);
}
