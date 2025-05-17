import { Center, Flex, Stack, Grid, GridItem, Reel, Icon, Decorator } from '@lism-ui/core';

export function Timelines({ isFlex, isReel, children, ...props }) {
	let theClassName = 'c--timelines';
	let Layout = Stack;
	const attrs = {};

	if (isFlex) {
		Layout = Flex;
		attrs.ai = 'flex-start';
	} else if (isReel) {
		Layout = Reel;
		attrs.ai = 'flex-start';
	}

	return (
		<Layout className={theClassName} {...attrs} {...props}>
			{children}
		</Layout>
	);
}

export function TimelineItem({
	variant,
	time,
	icon,
	isStart,
	isEnd,
	isHighlighted,

	isFlow,
	shapeColor,
	children,
	...props
}) {
	let itemClass = 'c--timeline';
	if (variant) itemClass += ` c--timeline--${variant}`;
	if (isStart) itemClass += ' -start';
	if (isEnd) itemClass += ' -end';
	// if (isHighlighted) itemClass += ' -emphasis';

	let shapeClass = 'c--timeline__shape';

	const itemProps = { className: itemClass };
	const lineProps = { bgc: 'base-2' };
	const timeProps = { fz: 'xs', lh: 'xs', c: 'text-2' };
	const shapeProps = { bdrs: '99', c: 'base', bgc: shapeColor || 'text' };
	const bodyProps = { isFlow };

	if (variant === 'horizontal') {
		bodyProps.layout = Center;
		timeProps.layout = Center;
		lineProps.aslf = 'c';

		if (isStart) lineProps.jslf = 'e';
		if (isEnd) lineProps.jslf = 's';
	} else {
		lineProps.jslf = 'c';
		bodyProps.mbs = '10';

		if (isStart) lineProps.aslf = 'e';
		if (isEnd) lineProps.aslf = 's';
	}

	if (icon) {
		shapeProps.layout = Center;
		// shapeClass += ' -has-icon';
	}

	return (
		<Grid {...itemProps} {...props}>
			<GridItem layout={Decorator} className='c--timeline__line' {...lineProps} />
			<GridItem className={shapeClass} {...shapeProps}>
				{isHighlighted && (
					<Decorator className='c--timeline__highlight' tag='span' pos='a' z='-1' />
				)}
				{icon && <Icon icon={icon} fz='s' />}
			</GridItem>
			<GridItem className='c--timeline__time' {...timeProps}>
				{time}
			</GridItem>
			<GridItem className='c--timeline__body' {...bodyProps}>
				{children}
			</GridItem>
		</Grid>
	);
}
