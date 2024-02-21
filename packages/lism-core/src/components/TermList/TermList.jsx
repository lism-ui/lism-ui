import React from 'react';
import { Stack } from '../Flex';

export default function TermList({ lismClass = {}, variant, ...props }) {
	lismClass.c = 'c--termList';
	if (variant) lismClass.c += ` c--termList--${variant}`;

	return <Stack tag='dl' lismClass={lismClass} gap={40} {...props} />;
}
