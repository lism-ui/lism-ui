'use client';

// // components/* が src なら↓
// import { AccordionHeader } from '@lism-ui/core/components/Accordion';
// import { AccordionHeader } from '@lism-ui/core/components';

// components/* が dist なら↓
import AccordionHeader from '@lism-ui/core/components/Accordion/AccordionHeader';

export default function (props) {
	return <AccordionHeader {...props} />;
}
