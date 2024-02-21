// import React from 'react';
import { Lism } from '../Lism';
import { getAccBodyProps } from './getProps';

export default function AccordionBody({ children, ...props }) {
	const { bodyProps, innerProps } = getAccBodyProps(props);

	return (
		<Lism {...bodyProps}>
			<Lism {...innerProps}>{children}</Lism>
		</Lism>
	);
}
