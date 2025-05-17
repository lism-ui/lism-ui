import { Lism } from '@lism-ui/core';

export default function List({ tag = 'ul', variant, children, ...props }) {
	let lismClass = 'b--list';
	if (variant) lismClass += ` b--list--${variant}`;

	return (
		<Lism tag={tag} lismClass={lismClass} {...props}>
			{children}
		</Lism>
	);
}
