'use client';

// // components/* が src なら↓
// import { AccordionHeader } from '@loos/lism-core/components/Accordion';
// import { AccordionHeader } from '@loos/lism-core/components';

// components/* が dist なら↓
import AccordionHeader from '@loos/lism-core/components/Accordion/AccordionHeader';

export default function (props) {
	return <AccordionHeader {...props} />;
}
