import { Lism } from '@lism-ui/core';
import './style.scss';

export default function List({ tag = 'ul', children, ...props }) {
	return (
		<Lism tag={tag} lismClass='c--list' {...props}>
			{children}
		</Lism>
	);
}
