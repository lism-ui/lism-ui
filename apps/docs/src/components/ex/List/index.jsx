import { Lism } from '@lism-ui/core';

export default function List({ tag = 'ul', children, ...props }) {
	return (
		<Lism tag={tag} lismClass='b--list' {...props}>
			{children}
		</Lism>
	);
}
