import { Lism, Flex, Divider } from '@lism-ui/core';

export function DividerLabel({ children, labelPosition, isVertical, bdc, bdw, bds, ...props }) {
	const bdProps = { bdc, bdw, bds };

	if (isVertical) {
		bdProps.variant = 'vertical';
		props.fxd = 'column';
	}
	return (
		<Flex className='b--dividerLabel' ai='c' g='30' lh='1' c='text-2' {...props}>
			{labelPosition !== 'start' && <Divider flexItem={{ fx: '1' }} {...bdProps} />}
			<Lism className='b--divider__label'>{children}</Lism>
			{labelPosition !== 'end' && <Divider flexItem={{ fx: '1' }} {...bdProps} />}
		</Flex>
	);
}
