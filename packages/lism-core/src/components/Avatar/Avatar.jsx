import { Media } from '../Lism';
import { Frame } from '../Frame';
import getProps from './getProps';

// srcがあれば自身をmediaにする？この時、objectFit適用する
export default function Avatar({ children, name, src, ...props }) {
	const hasChildren = !!children;
	const { avatarProps, mediaProps } = getProps(props);

	if (hasChildren) {
		return (
			<Frame skipState {...avatarProps}>
				{children}
			</Frame>
		);
	}

	return (
		<Frame skipState {...avatarProps}>
			<Media src={src} alt={name} {...mediaProps} />
		</Frame>
	);
}
