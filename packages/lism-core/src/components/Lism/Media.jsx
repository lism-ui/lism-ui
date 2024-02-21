import { getLismProps, getMediaProps } from '../../lib';

// memo: picture対応
export default function Media({ as, passProps, tag, ...props }) {
	const JSX = as || tag || 'img';
	return <JSX {...getLismProps(getMediaProps(props))} {...passProps} />;
}
