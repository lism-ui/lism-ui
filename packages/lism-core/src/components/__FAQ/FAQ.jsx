// import React from 'react';
import { Lism } from '../Lism';
import { Stack } from '../Flex/Stack';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
// import { Grid } from '../Grid';
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	AccordionIcon,
	AccordionLabel,
} from '../Accordion';

export default function FAQ({
	title,
	// titleProps = {},
	// iconSize,
	qIconProps = {},
	aIconProps = {},
	children,
	isFlow,
	isAccordion,
	// iconType,
	// style = {},
	...props
}) {
	const Qmark = (
		<Icon data-icon='Q' fz='xl'>
			Q.
		</Icon>

		// <Flex
		// 	blockClass='b--faq__icon'
		// 	// c='opposite'
		// 	// bgc='opposite'
		// 	// p={15}
		// 	// bd='-'
		// 	// bdc='transparent'
		// 	// radius='99'
		// 	// fz='2xl'
		// 	{...qIconProps}
		// >
		// 	<Icon blockClass='b--faq__icon' icon='Q' fz='xl' {...qIconProps} />
		// </Flex>
	);

	const Qtag = 'span';

	if (isAccordion) {
		return (
			<Accordion {...props}>
				<AccordionHeader>
					{Qmark}
					<AccordionLabel tag={Qtag} fw='bold'>
						{title}
					</AccordionLabel>
					<AccordionIcon />
				</AccordionHeader>
				<AccordionBody>{children}</AccordionBody>
			</Accordion>
		);
	}

	const Amark = (
		// <Flex visibility='hidden' {...aIconProps}>
		<Icon data-icon='A' fz='xl' {...aIconProps} />
		// </Flex>
	);

	return (
		<Stack tag='dl' blockClass='b--faq' gap={20} {...props}>
			<Flex tag='dt' blockClass='b--faq__header' gap={30} ai='c'>
				{Qmark}
				<Lism tag={Qtag} className='b--faq__question' fw='bold'>
					{title}
				</Lism>
			</Flex>
			<Flex tag='dd' blockClass='b--faq__body' gap={30}>
				{Amark}
				<Lism blockClass='b--faq__answer' isFlow={isFlow || 's'}>
					{children}
				</Lism>
			</Flex>
		</Stack>
	);
}
