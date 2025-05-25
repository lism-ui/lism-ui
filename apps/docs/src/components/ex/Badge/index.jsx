import { Lism } from '@lism-ui/core';
import './style.css';

export default function Badge({ children, ...props }) {
	return (
		<Lism lismClass='c--badge' tag='span' px='10' py='5' lh='1' bdrs='2' {...props}>
			{children}
		</Lism>
	);
}
