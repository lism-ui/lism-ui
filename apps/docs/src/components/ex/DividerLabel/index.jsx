import { Flex, Divider } from '@lism-ui/core';

export default function DividerLabel({
	children,
	textPosition,
	bd = 'bs',
	bdc = 'currentColor',
	bdw,
	bds,
	...props
}) {
	const bdProps = { bd, bdc, bdw, bds };

	return (
		<Flex lismClass='b--dividerLabel' ai='c' g='30' lh='1' {...props}>
			{textPosition !== 'start' && <Divider op='mid' flexItem={{ fx: '1' }} {...bdProps} />}
			<div className='b--dividerLabel__text'>{children}</div>
			{textPosition !== 'end' && <Divider op='mid' flexItem={{ fx: '1' }} {...bdProps} />}
		</Flex>
	);
}
