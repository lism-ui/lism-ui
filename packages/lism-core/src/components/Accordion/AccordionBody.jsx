// import React from 'react';
import { Lism } from '../Lism';
import { Grid } from '../Grid';
import { getAccBodyProps } from './getProps';

export default function AccordionBody({ children, ...props }) {
	const { bodyProps, innerProps } = getAccBodyProps(props);

	return (
		<Grid {...bodyProps}>
			<Lism {...innerProps}>{children}</Lism>
		</Grid>
	);
}
