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
export function getContentProps(direction, variant) {
	const returnProps = {};
	if ('speak' === variant && direction === 'start') {
		returnProps.radii = { ss: 0 };
	} else if ('speak' === variant && direction === 'end') {
		returnProps.radii = { se: 0 };
	}

	return returnProps;
}

export function getDecoProps(direction, variant) {
	return {
		variant: `chat-${variant}`,
		mask: '-',
		pos: 'absolute',
		t: '0',
		...DECORATOR_PROPS[direction],
	};
}
