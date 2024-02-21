const DECORATOR_PROPS = {
	start: {
		insets: { ie: '100%' },
	},
	end: {
		insets: { is: '100%' },
		scale: '-1 1',
	},
};

export function getProps(direction, variant) {
	if (direction === 'start') {
		return {
			boxcolor: '-',
			// gt: 'fix:l',
			ji: 'start',
			ai: 'start',
		};
	} else {
		return {
			boxcolor: '-',
			// gt: 'fix:r',
			ji: 'end',
			ai: 'start',
		};
	}
}
export function getNameProps(props = {}) {
	return {
		fz: '2xs',
		lh: 'xs',
		px: 'em5',
		py: 'em1',
		c: 'content-2',
		// translate: '0 -100%',
		...props,
	};
}
export function getAvatarProps(props = {}) {
	return {
		bgc: 'base',
		bdrs: 'full',
		alt: '',
		width: '60',
		height: '60',
		'aria-hidden': 'true',
		...props,
	};
}
export function getFooterProps(props = {}) {
	return {
		fz: '2xs',
		lh: 'xs',
		px: 'em5',
		py: 'em1',
		c: 'content-2',
		...props,
	};
}

export function getContentProps(direction, variant, contentProps) {
	const returnProps = {
		pos: 'relative',
		maxW: 's',
	};
	if ('speak' === variant && direction === 'start') {
		returnProps.bdradii = { ss: 0 };
	} else if ('speak' === variant && direction === 'end') {
		returnProps.bdradii = { se: 0 };
	}

	return { ...returnProps, ...contentProps };
	// return {
	// 	className: 'c--chat__content',
	// 	pos: 'relative',
	// 	maxW: 's',
	// };
}

export function getDecoProps(direction, variant) {
	return {
		variant: `chat-${variant}`,
		mask: '-',
		pos: 'absolute',
		top: '0',
		...DECORATOR_PROPS[direction],
	};
}
