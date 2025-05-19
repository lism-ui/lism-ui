import { Lism } from '@lism-ui/core';

export default function List({ tag = 'ul', children, ...props }) {
	return (
		<Lism tag={tag} lismClass='l--list' {...props}>
			{children}
		</Lism>
	);
}
