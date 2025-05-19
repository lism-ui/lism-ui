import { Media, Frame } from '@lism-ui/core';

export default function Avatar({ size = '2em', src = '', alt = '', ...props }) {
	return (
		<Frame lismClass='c--avatar' ar='1/1' w={size} h='auto' bdrs='99' {...props}>
			<Media src={src} alt={alt} width='100%' height='100%' decoding='async' />
		</Frame>
	);
}
