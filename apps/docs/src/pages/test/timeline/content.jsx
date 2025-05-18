import { Lism, Spacer, Text, Divider, Dummy } from '@lism-ui/core';

import Timeline from '~/components/ex/Timeline/index';
import '~/components/ex/Timeline/style.scss';

// const FolderIcon = (props) => (
// 	<svg
// 		xmlns='http://www.w3.org/2000/svg'
// 		width='1em'
// 		height='1em'
// 		fill='currentColor'
// 		viewBox='0 0 256 256'
// 		{...props}
// 	>
// 		<path d='M248,216a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16H240A8,8,0,0,1,248,216Zm-24-24a8,8,0,0,0,8-8V148.32a40.13,40.13,0,0,0-29.28-38.54l-60.84-17-22.5-53.63a8,8,0,0,0-4.85-4.5l-5.47-1.82A16,16,0,0,0,88,48V77.39L58.13,68.88,47.52,39.51a8,8,0,0,0-5-4.87l-5.47-1.82A16,16,0,0,0,16,48v55.72a40.12,40.12,0,0,0,29.21,38.52L221.84,191.7A8,8,0,0,0,224,192Z'></path>
// 	</svg>
// );

export default function content() {
	return (
		<Lism isFlow hasGutter py={50} isContainer='s' id='demo-wrapper' _dir='rtl'>
			<Timeline.Root>
				<Timeline.Item>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
			</Timeline.Root>

			<Timeline.Root>
				<Timeline.Item isStart>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item icon='star'>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item isEnd isHighlighted>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
			</Timeline.Root>

			<h2>Timeline - 横並び</h2>

			<Timeline.Root variant='horizontal'>
				<Timeline.Item isHorizontal isStart icon='star'>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item isHorizontal>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
				<Timeline.Item isHorizontal isEnd isHighlighted>
					<Timeline.Time>20yy年m月dd日</Timeline.Time>
					<Timeline.Title>Lism x.y.z がリリース。</Timeline.Title>
					<Timeline.Text>
						<Dummy lang='ja' />
					</Timeline.Text>
				</Timeline.Item>
			</Timeline.Root>
		</Lism>
	);
}
