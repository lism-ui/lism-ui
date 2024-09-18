import { Stack } from '../Flex';

export default function DialogInner({ children, ...props }) {
	return (
		<Stack lismClass='d--modal__inner' pos='r' maxH='100%' maxW='m' m='a' bgc='base' {...props}>
			{children}
		</Stack>
	);
}
