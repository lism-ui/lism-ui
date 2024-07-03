// import React from 'react';
import { Lism } from '../Lism';
import { Center } from '../Center';
import { Icon } from '../Icon';
import { SideFlex } from '../Flex';

import getProps from './getProps';

export default function Callout({ children, ...props }) {
	const { calloutProps, icon, iconProps, bodyProps } = getProps(props);

	return (
		<SideFlex side='first' {...calloutProps}>
			{icon && (
				<Center {...iconProps}>
					<Icon icon={icon} />
				</Center>
			)}
			<Lism {...bodyProps}>{children}</Lism>
		</SideFlex>
	);
}
