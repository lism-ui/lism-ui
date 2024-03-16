// import React from 'react';
import { Flex, FlexItem } from '../Flex';
import { Lism } from '../Lism';
import { getDividerProps } from './getProps';

export default function Divider(props) {
	const { label } = props;
	const { dividerProps, labelProps, bdProps } = getDividerProps(props);
	return (
		<Flex {...dividerProps}>
			{label ? (
				<>
					<FlexItem {...bdProps} />
					<Lism {...labelProps}>{label}</Lism>
					<FlexItem {...bdProps} />
				</>
			) : (
				<FlexItem {...bdProps} />
			)}
		</Flex>
	);
}
