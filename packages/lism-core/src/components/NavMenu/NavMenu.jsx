// import React from 'react';
import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { getMaybeCssVar } from '../../lib';

export default function NavMenu({
	lismClass = {},
	lismStyle = {},
	children,
	variant,
	nestLevel,
	// border,
	isFlex,
	itemHovColor,
	itemHovBgc,
	// itemP,
	// style = {},
	// itemPadding,
	// provide = { p: null }, // data-provideの出力だけしておきたい?
	...props
}) {
	lismClass.c = 'c--navMenu';
	if (variant) {
		// navProps['data-variant'] = variant;
		lismClass.c += ` c--navMenu--${variant}`;
	}

	if (itemHovBgc) {
		lismStyle['--hov--bgc'] = getMaybeCssVar(itemHovBgc, 'color', 'bgc');
	}
	if (itemHovColor) {
		lismStyle['--hov--c'] = getMaybeCssVar(itemHovColor, 'color', 'c');
	}

	// const lismStyle = {};
	const navProps = {
		tag: 'ul',
		lismClass,
		lismStyle,
		// provide,
	};

	if (nestLevel) {
		// lismStyle['--level'] = parseInt(nestLevel);
		navProps['data-nest-level'] = nestLevel;
	}

	if (isFlex) {
		return (
			<Flex {...navProps} {...props}>
				{children}
			</Flex>
		);
	}

	return (
		<Lism {...navProps} {...props}>
			{children}
		</Lism>
	);
}
