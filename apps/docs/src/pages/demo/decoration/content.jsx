import { Spacer, Decorator, Grid, Flex, GridItem, FlexItem } from '@lism-ui/core';
import { DammyText } from '~/components';
import DecoBox from './DecoBox';

export default function content() {
	return (
		<>
			<h2>balloon</h2>
			<Flex
				className='c--balloon c--balloon--left'
				variant='ltr'
				ai='center'
				provide={{ bdc: 'currentColor', bgc: 'base' }}
			>
				<Decorator
					as={FlexItem}
					left='1px'
					// z='1'
					size='0.875em'
					bd
					consume='bdc bgc'
					css={{
						rotate: '45deg',
						translate: '50%',
						clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)',
					}}
				/>
				<FlexItem p='box' bdrs='l' w='fit-content' bd consume='bdc bgc'>
					<DammyText />
				</FlexItem>
			</Flex>
			<Flex
				// name='balloon'
				// variant='right'
				variant='ltr'
				ai='center'
				provide={{ bdc: 'currentColor', bgc: 'base-2' }}
			>
				<FlexItem p='box' bdrs='l' w='fit-content' bd consume='bdc bgc' ml='auto'>
					<DammyText length='l' />
				</FlexItem>
				<Decorator
					as={FlexItem}
					size='0.875em'
					bd
					consume='bdc bgc'
					// ga='side'
					right='1px'
					// z='1'
					my='1.5em'
					css={{
						rotate: '-45deg',
						translate: '-50%',
						clipPath: 'polygon(0% 100%, 100% 0%, 100% 100%)',
					}}
				/>
			</Flex>

			<Grid
				// name='balloon'
				// variant='top'
				ji='center'
				provide={{ bdc: 'base-3', bgc: 'base-2', bdw: '2px' }}
			>
				<GridItem p='box' bdrs='l' w='fit-content' bd consume='bdc bgc bdw'>
					<DammyText length='l' />
				</GridItem>
				<Decorator
					as={GridItem}
					size='0.875em'
					bd
					consume='bdc bgc bdw'
					grs='1'
					top='var(--bdw)'
					mx='1.5em'
					css={{
						rotate: '45deg',
						translate: '0 50%',
						clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
					}}
				/>
			</Grid>
			<Grid
				// name='balloon'
				// variant='bottom'
				// gt='side:b'
				ji='center' // start, end
				provide={{ bdc: 'base-3', bgc: 'base-2', bdw: '2px' }}
			>
				<GridItem p='box' bdrs='l' w='fit-content' bd consume='bdc bgc bdw'>
					<DammyText length='l' />
				</GridItem>
				<Decorator
					as={GridItem}
					size='0.875em'
					bd
					consume='bdc bgc bdw'
					grs='2'
					bottom='var(--bdw)'
					mx='1.5em'
					css={{
						rotate: '45deg',
						translate: '0 -50%',
						clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)',
					}}
				/>
			</Grid>
			<Spacer h={40} />
			<h2>pipipi</h2>
			<DecoBox variant='pipipi' subvariant='left'>
				<DammyText />
			</DecoBox>
			<DecoBox variant='pipipi' subvariant='right' bdc='blue'>
				<DammyText />
			</DecoBox>
			<Spacer h={40} />
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
