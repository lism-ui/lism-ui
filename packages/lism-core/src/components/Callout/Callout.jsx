// import React from 'react';
import { Lism } from '../Lism';
import { Center } from '../Center';
import { Icon } from '../Icon';
import { WithSide } from '../WithSide';

import getProps from './getProps';

export default function Callout({ children, ...props }) {
	const { calloutProps, icon, iconProps, bodyProps } = getProps(props);

	return (
		<WithSide side='first' {...calloutProps}>
			{icon && (
				<Center isSide {...iconProps}>
					<Icon icon={icon} />
				</Center>
			)}
			<Lism {...bodyProps}>{children}</Lism>
		</WithSide>
	);
}
