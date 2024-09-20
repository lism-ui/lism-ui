import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Stack } from '../Stack';
import { Icon } from '../Icon';
import { Center } from '../Center';
import getProps from './getProps';

export default function Note({ heading, children, ...props }) {
	const { noteProps, icon, iconProps, headProps, bodyProps } = getProps(props);

	return (
		<Stack {...noteProps}>
			{heading && (
				<Flex {...headProps}>
					{icon && (
						<Center className='c--note__icon' {...iconProps}>
							<Icon icon={icon} />
						</Center>
					)}
					<span className='c--note__heading'>{heading}</span>
				</Flex>
			)}
			<Lism {...bodyProps}>{children}</Lism>
		</Stack>
	);
}
