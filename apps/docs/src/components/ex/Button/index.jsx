import { Lism } from '@lism-ui/core';

export default function Badge({ variant = 'fill', children, ...props }) {
	let lismClass = 'b--button';
	if (variant) lismClass += ` b--button--${variant}`;

	return (
		<Lism lismClass={lismClass} tag='a' hov='fade' {...props}>
			{children}
		</Lism>
	);
}
