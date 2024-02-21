// import React from 'react';
import { Lism } from '../Lism';

// import { Icon } from '../Icon';
// import { Badge } from '../Badge';
// import { Accordion, AccordionHeader, AccordionBody } from '../Accordion';

export default function NavMenuItem({ lismClass = {}, children, ...props }) {
	lismClass.c = 'c--navMenu__item';
	return (
		<Lism skipState tag='li' lismClass={lismClass} {...props}>
			{children}
		</Lism>
	);
}
