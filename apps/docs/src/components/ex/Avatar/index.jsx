import { Lism } from '@lism-ui/core';

export default function Badge({ variant, children, ...props }) {
	let lismClass = 'b--badge';
	if (variant) lismClass += ` b--badge--${variant}`;

	return (
		<Lism lismClass={lismClass} tag='span' px='20' bdrs='1' {...props}>
			{children}
		</Lism>
	);
}
