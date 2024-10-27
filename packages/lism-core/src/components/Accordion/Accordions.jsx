import React from 'react';
import { Stack } from '../Stack';
import { getAccGroupProps } from './getProps';

// duration: [s]
export default function AccordionGroup({ children, ...props }) {
	return <Stack {...getAccGroupProps(props)}>{children}</Stack>;
}
