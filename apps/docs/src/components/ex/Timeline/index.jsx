import { Center, Stack, Grid, FlexItem, GridItem, Icon, Decorator } from '@lism-ui/core';

export function Timelines({ children, ...props }) {
	return (
		<Stack className='c--timelines' {...props}>
			{children}
		</Stack>
	);
}

export function Timeline({ icon, isStart, isEnd, isHighlighted, shapeColor, children, ...props }) {
	let itemClass = 'c--timeline';
	const lineProps = { bgc: 'divider', jslf: 'c' };
	const shapeProps = {
		pos: 'r',
		z: '1',
		jslf: 'c',
		bdrs: '99',
		c: 'base',
		bgc: shapeColor || 'text',
	};

	if (isStart) {
		itemClass += ' -start';
		lineProps.aslf = 'e';
	}
	if (isEnd) {
		itemClass += ' -end';
		lineProps.aslf = 's';
	}
	if (icon) {
		shapeProps.layout = Center;
	}

	return (
		<FlexItem layout={Grid} className={itemClass} {...props}>
			<GridItem layout={Decorator} className='c--timeline__line' {...lineProps} />
			<GridItem className='c--timeline__shape' {...shapeProps}>
				{isHighlighted && (
					<Decorator
						className='c--timeline__highlight'
						tag='span'
						pos='a'
						z='-1'
						bgc='inherit'
						bdrs='99'
					/>
				)}
				{icon && <Icon icon={icon} fz='s' />}
			</GridItem>
			{children}
		</FlexItem>
	);
}
export function TimelineTime(props) {
	return <GridItem className='c--timeline__time' fz='xs' lh='xs' c='text-2' {...props} />;
}

export function TimelineBody(props) {
	return <GridItem className='c--timeline__body' mbs='10' {...props} />;
}
