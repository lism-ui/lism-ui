import getLismProps from '../../lib/getLismProps';

/**
 * Lism Propsを処理できるだけのコンポーネント
 */
export default function Lism({ children, as, asProps, tag, ...props }) {
	// tagは文字列のみ。（asはコンポーネントも指定できる。）
	// if (tag && typeof tag !== 'string') {
	// 	console.error('@Lism : "tag" prop should be a string.');
	// }

	const JSX = as || tag || 'div';

	return (
		<JSX {...getLismProps(props)} {...asProps}>
			{children}
		</JSX>
	);
}
