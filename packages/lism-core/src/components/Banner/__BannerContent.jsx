import { Lism } from '../Lism';

export default function BannerContent({ children, ...attrs }) {
	// ratio指定なし、href指定なし
	return (
		<Lism blockClass='b--banner__content' isFlow flowGap={40} {...attrs}>
			{children}
		</Lism>
	);
}
