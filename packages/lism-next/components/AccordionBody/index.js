'use client';

// // components/* が src なら↓
// import { AccordionBody } from '@loos/lism-core/components/Accordion';
// import { AccordionBody } from '@loos/lism-core/components';

// components/* が dist なら↓
import AccordionBody from '@loos/lism-core/components/Accordion/AccordionBody';

export default function (props) {
	return <AccordionBody {...props} />;
}
