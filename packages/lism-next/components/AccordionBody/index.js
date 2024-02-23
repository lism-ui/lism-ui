'use client';

// // components/* が src なら↓
// import { AccordionBody } from '@lism-ui/core/components/Accordion';
// import { AccordionBody } from '@lism-ui/core/components';

// components/* が dist なら↓
import AccordionBody from '@lism-ui/core/components/Accordion/AccordionBody';

export default function (props) {
	return <AccordionBody {...props} />;
}
