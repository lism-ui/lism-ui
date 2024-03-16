// import React from 'react';
import { Flex, FlexItem } from '../Flex';
import { Decorator } from '../Decorator';
import { getDividerProps } from './getProps';

export default function Divider(props) {
	const { label, ...attrs } = getDividerProps(props);

	return (
		<Flex {...attrs}>
			{label ? (
				<>
					<FlexItem layout={Decorator} fx='1' />
					<span>{label}</span>
					<FlexItem layout={Decorator} fx='1' />
				</>
			) : (
				<FlexItem layout={Decorator} fx='1' />
			)}
		</Flex>
	);
}
