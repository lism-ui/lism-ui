// import React from 'react';
import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { AccordionBody } from '../Accordion';

export default function NavMenuList({
	isAccBody,
	accBodyProps = {},
	lismClass = {},
	lismStyle = {},
	children,
	variant,
	nestLevel,
	isFlex,
	hovC,
	hovBgc,
	...props
}) {
	lismClass.c = 'c--navMenu';
	if (variant) {
		// navProps['data-variant'] = variant;
		lismClass.c += ` c--navMenu--${variant}`;
	}

	const hover = { pass: { bgc: hovBgc, c: hovC } };

	// if (itemHovBgc) {
	// 	lismStyle['--hov--bgc'] = getMaybeCssVar(itemHovBgc, 'color', 'bgc');
	// }
	// if (itemHovColor) {
	// 	lismStyle['--hov--c'] = getMaybeCssVar(itemHovColor, 'color', 'c');
	// }

	// const lismStyle = {};
	const navProps = {
		tag: 'ul',
		lismClass,
		lismStyle,
		hover,
	};

	if (nestLevel) {
		// lismStyle['--level'] = parseInt(nestLevel);
		navProps['data-nest-level'] = nestLevel;
	}

	const JSX = isFlex ? Flex : Lism;

	if (isAccBody) {
		return (
			<AccordionBody p={0} {...accBodyProps}>
				<JSX {...navProps} {...props}>
					{children}
				</JSX>
			</AccordionBody>
		);
	}
	return (
		<JSX {...navProps} {...props}>
			{children}
		</JSX>
	);
}
