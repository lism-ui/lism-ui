import { Lism, Spacer, Text, Divider, DammyText } from '@lism-ui/core';

import { Timelines, TimelineItem } from '~/components/ex/Timeline/index_block';
import '~/components/ex/Timeline/style.scss';

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
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem time='20yy年m月d日' isHighlighted>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>

				<TimelineItem time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
			</Timelines>

			<h3>アイコンあり</h3>
			<Timelines>
				<TimelineItem time='20yy年m月d日' icon={FolderIcon}>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem isHighlighted time='20yy年m月d日' icon={FolderIcon} shapeColor='red'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
			</Timelines>

			<p>最初と最後のラインを消す</p>
			<Timelines>
				<TimelineItem isStart time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>

				<TimelineItem time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem isEnd time='2022年5月xx日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
			</Timelines>
			{/*  */}
			<h2>Timeline - 横並び</h2>
			{/* */}
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
					isHighlighted
					isFlow='s'
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>開発スタート</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem variant='horizontal' isFlow='s' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem variant='horizontal' isFlow='s' time='20yy年m月d日'>
					<Text>Lism 0.1.x がリリース</Text>
					<DammyText lang='ja' />
				</TimelineItem>
				<TimelineItem
					variant='horizontal'
					isEnd
					isFlow='s'
					time='20yy年m月d日'
					icon={FolderIcon}
				>
					<Text>Lism v.2.0 へメジャーアップデート</Text>
					<DammyText lang='ja' />
				</TimelineItem>
			</Timelines>
		</Lism>
	);
}
