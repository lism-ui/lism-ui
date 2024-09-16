import { forwardRef } from 'react';
import getLismProps from '../../lib/getLismProps';

/**
 * Lism Propsを処理できるだけのコンポーネント
 */
const Lism = forwardRef(({ children, as, exProps, tag, ...props }, ref) => {
	// tagは文字列のみ。（asはコンポーネントも指定できる。）
	// if (tag && typeof tag !== 'string') {
	// 	console.error('@Lism : "tag" prop should be a string.');
	// }

	let JSX = as || tag || 'div';

	return (
		<JSX ref={ref} {...getLismProps(props)} {...exProps}>
			{children}
		</JSX>
	);
});

Lism.displayName = 'Lism';

export default Lism;
