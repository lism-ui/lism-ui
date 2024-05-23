import { Spacer, Decorator, Grid, Flex, GridItem, FlexItem } from '@lism-ui/core';
import { DammyText } from '~/components';
import DecoBox from './DecoBox';

export default function content() {
	return (
		<>
			<h2>sticky</h2>
			<DecoBox variant='sticky'>
				<DammyText />
			</DecoBox>
			<DecoBox
				variant='sticky'
				data={{ bodyProps: { bdc: 'blue:70%', bgc: 'hsl(200 90% 95%)' } }}
			>
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
			<h2>kakko</h2>
			<DecoBox variant='kakko' subvariant='lr'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='kakko' subvariant='tb'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='big-kakko' subvariant='lr' isFlow>
				<DammyText />
				<DammyText />
			</DecoBox>
			<DecoBox variant='big-kakko' subvariant='tb' isFlow>
				<DammyText />
				<DammyText />
			</DecoBox>
		</>
	);
}
