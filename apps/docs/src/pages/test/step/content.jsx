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
	Badge,
	Divider,
	GridItem,
	FlexItem,
	ShapeDivider,
	Box,
} from '@lism-ui/core';
import { DammyText } from '~/components';
import { ArrowFatLinesDown } from '@phosphor-icons/react';

import './step.scss';

export function Step(props) {
	return <Stack className='c--step' gap='em8' bdrs='m' bxsh='3' p='em12' {...props} />;
}

export function StepBody(props) {
	return <Lism isFlow='s' pis='em4' {...props} />;
}

export function StepHead({ num = '1', label = '', children, ...props }) {
	return (
		<Flex className='c--stepHead' gap='em8' ai='c' {...props}>
			<Badge variant='fill' lh='1' px='em6' py='em3' bdrs='full'>
				{label && (
					<Text fz='xs' fs='i'>
						{label}
					</Text>
				)}
				<Text fz='2xl' ff='mono' fs='i'>
					{num}
				</Text>
			</Badge>
			<Lism fw='bold'>{children}</Lism>
		</Flex>
	);
}

const stepIcon = ArrowFatLinesDown;
export default function content() {
	return (
		<Lism isFlow hasGutter py={50} isContainer='s' alignfull id='demo-wrapper' _dir='rtl'>
			<h1>Step</h1>

			<Box>
				<ShapeDivider shape='slope1' isFlip c='content-3' />
				<Box isFlow hasGutter py={50}>
					<DammyText length='l' />
				</Box>
				<ShapeDivider shape='slope1' c='content-3' />
			</Box>

			<Stack gap='40'>
				<Step>
					<StepHead num='1' label='Step.'>
						手順1のタイトル
					</StepHead>
					<StepBody>
						<p>
							ロレム・イプサムの座り雨、トマ好き学習エリット、しかし時と活力、そのような躍動と楽しみ、ブラインド行うにはいくつかの重要な事柄に座ります。
						</p>
					</StepBody>
				</Step>

				<Center>
					<Icon icon={stepIcon} weight='fill' fz='3xl' />
				</Center>

				<Step>
					<StepHead num='2' label='Step.'>
						手順2のタイトル
					</StepHead>
					<StepBody>
						<DammyText lang='ja' length='s' />
						<DammyText lang='ja' length='codes' />
					</StepBody>
				</Step>

				<Center>
					<Icon icon={stepIcon} weight='fill' fz='3xl' />
				</Center>

				<Step>
					<StepHead num='3' label='Step.'>
						手順3のタイトル
					</StepHead>
					<StepBody>
						<DammyText lang='ja' length='l' />
					</StepBody>
				</Step>
			</Stack>

			<h2>横並び</h2>
		</Lism>
	);
}
