// import React from 'react';
import { FlexItem } from '../Flex';
import { getAccLabelProps } from './getProps';

export default function AccordionLabel({ children, ...props }) {
	return <FlexItem {...getAccLabelProps(props)}>{children}</FlexItem>;
}
