// import React from 'react';
import { Lism } from '../Lism';
import { Icon } from '../Icon';
import { SideFlex } from '../Flex';
// import { Center } from '../Center';
// import AlertPresets from './presets';
import getProps from './getProps';
// const _default = defaultProps?.Alert || {};

export default function Alert({ children, ...props }) {
	const { alertProps, iconProps, bodyProps } = getProps(props);

	return (
		<SideFlex side='first' {...alertProps}>
			{iconProps.icon && <Icon {...iconProps} />}
			<Lism {...bodyProps}>{children}</Lism>
		</SideFlex>
	);
}
