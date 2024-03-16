import {
	Lism,
	Spacer,
	Decorator,
	Grid,
	Stack,
	Flex,
	Text,
	Reel,
	Icon,
	Center,
	Divider,
	GridItem,
	FlexItem,
} from '@lism-ui/core';
import { DammyText } from '~/components';

import './timeline.scss';
import './step.scss';

const FolderIcon = (props) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='1em'
		height='1em'
		fill='currentColor'
		viewBox='0 0 256 256'
		{...props}
	>
		<path d='M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,88,48V77.39L58.13,68.88,47.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,16,48v55.72a40.12,40.12,0,0,0,29.21,38.52L221.84,191.7A8,8,0,0,0,224,192Z'></path>
	</svg>
);

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
	isEmphasis,

	isFlow,
	shapeColor,
	children,
	...props
}) {
	let itemClass = 'c--timeline';
	if (variant) itemClass += ` c--timeline--${variant}`;
	if (isStart) itemClass += ' -start';
	if (isEnd) itemClass += ' -end';
	// if (isEmphasis) itemClass += ' -emphasis';

	let shapeClass = 'c--timeline__shape';

	const itemProps = { className: itemClass };
	const lineProps = { bgc: 'base-3' };
	const timeProps = { fz: 'xs', lh: 'xs', c: 'content-2' };
	const shapeProps = { bdrs: 'full', c: 'base', bgc: shapeColor || 'content' };
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
		<FlexItem layout={Grid} {...itemProps} {...props}>
			<GridItem layout={Decorator} className='c--timeline__line' {...lineProps} />
			<GridItem className={shapeClass} {...shapeProps}>
				{isEmphasis && (
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
		</FlexItem>
	);
}

export default function content() {
	return (
		<Lism isFlow hasGutter py={50} isContainer='s' alignfull id='demo-wrapper' _dir='rtl'>
			<h1>timeline</h1>
			<Spacer h='20' />
			<h2>Timeline</h2>
			<h3>hoge</h3>
			<p>aaa</p>
			<h3>hoge</h3>
			<Timelines>
				<TimelineItem time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem isEmphasis time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>

				<TimelineItem time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
			</Timelines>

			<h3>アイコンあり</h3>
			<Timelines>
				<TimelineItem time='20yy年m月d日' icon={FolderIcon}>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem isEmphasis time='20yy年m月d日' icon={FolderIcon} shapeColor='red'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
			</Timelines>

			<p>最初と最後のラインを消す</p>
			<Timelines>
				<TimelineItem isStart time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>

				<TimelineItem time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem isEnd time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
			</Timelines>
			{/*  */}
			<h2>Timeline - 横並び</h2>
			{/* <Reel> */}
			<Timelines isFlex>
				<TimelineItem variant='horizontal' time='20yy年m月d日' icon={FolderIcon}>
					<Text>開発スタート</Text>
				</TimelineItem>
				<TimelineItem variant='horizontal' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
				</TimelineItem>
				<TimelineItem variant='horizontal' time='20yy年m月d日' icon={FolderIcon}>
					<Text>Lism v.2.0 へメジャーアップデート</Text>
				</TimelineItem>
			</Timelines>

			<Divider bds='dotted' bdw='4px' my='60' />

			<Timelines isFlex>
				<TimelineItem
					variant='horizontal'
					fx='1'
					isStart
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>開発スタート</Text>
				</TimelineItem>
				<TimelineItem variant='horizontal' fx='1' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
				</TimelineItem>
				<TimelineItem
					variant='horizontal'
					fx='1'
					isEnd
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>Lism v.2.0 へメジャーアップデート</Text>
				</TimelineItem>
			</Timelines>

			<Divider bds='dotted' bdw='4px' my='60' />

			<Timelines isReel itemW='20rem'>
				<TimelineItem
					variant='horizontal'
					isStart
					isEmphasis
					isFlow='s'
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>開発スタート</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem variant='horizontal' isFlow='s' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem variant='horizontal' isFlow='s' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
				<TimelineItem
					variant='horizontal'
					isEnd
					isFlow='s'
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>Lism v.2.0 へメジャーアップデート</Text>
					<p>
						ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
					</p>
				</TimelineItem>
			</Timelines>

			<h2>Step</h2>
			<Reel className='c--step'>
				<Grid className='c--step__item'>
					{/* <Decorator className='c--step__line' /> */}
					<Decorator
						className='c--step__ct -empasis'
						aspect='1/1'
						bdrs='full'
						c='opposite'
						bgc='opposite'
					></Decorator>
					<Lism className='c--step__body'>
						<Text>Lism 0.1.x がリリースした日。</Text>
					</Lism>
					<Decorator className='c--step__line' />
				</Grid>
				<Grid className='c--step__item'>
					<Decorator className='c--step__line' />
					<Center
						className='c--step__ct'
						aspect='1/1'
						bdrs='full'
						c='opposite'
						bgc='opposite'
					>
						<Icon icon={FolderIcon}></Icon>
					</Center>
					<Lism className='c--step__body'>
						<Text>Lism 0.1.x がリリースした日。</Text>
					</Lism>
					<Decorator className='c--step__line' />
				</Grid>
				<Grid className='c--step__item'>
					<Decorator className='c--step__line' />
					<Center
						className='c--step__ct'
						aspect='1/1'
						bdrs='full'
						c='opposite'
						bgc='opposite'
					>
						{/* <Icon icon={FolderIcon}></Icon> */}
					</Center>
					<Lism className='c--step__body'>
						<Text>Lism 0.1.x がリリースした日。</Text>
					</Lism>
					<Decorator className='c--step__line' />
				</Grid>
			</Reel>
		</Lism>
	);
}
