import { Media, Frame } from '@lism-ui/core';

export default function Avatar({ src = '', alt = '', ...props }) {
	return (
		<Frame skipState lismClass='b--avatar' ar='1/1' w='2em' h='auto' bdrs='99' {...props}>
			<Media src={src} alt={alt} width='100%' height='100%' decoding='async' />
		</Frame>
	);
}
