import { Box, Text, Stack, Frame, Center, Grid } from '@loos/lism-core';
import { DammyText } from '~/components';

export const ColorDemos = ({ colors = [] }) => {
	return (
		<>
			{colors.map((name) => {
				return (
					<Stack key={name} gap='10'>
						<Text bd='left' bdw='2px' lh='1.25' pl='20' fz='xs'>
							<code>--{name}</code>
						</Text>
						<Grid ratio={['1', '1:2']} fz='s'>
							<Box bgc={`var(--${name})`} p='10'>
								&emsp;
							</Box>
							<Box bd='' c={`var(--${name})`} p='10'>
								Lorem ipsum text...
							</Box>
						</Grid>
					</Stack>
				);
			})}
		</>
	);
};

export const FzDemos = () => (
	<>
		{['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl', '5xl'].map((fz, i) => {
			return (
				<Stack key={fz} gap='0'>
					<Text className='is--sizeTip' fz='12px'>
						<code>{fz}</code>
					</Text>
					<Text className='is--lipsum' fz={fz} whs='nw'>
						ロレムイプサムのAmet、学部エリットとSeddo絵薄モッド。
					</Text>
				</Stack>
			);
		})}
	</>
);

export const LhDemos = ({ lang = 'en' }) => (
	<>
		{['xs', 's', 'base', 'l', 'xl'].map((lh, i) => {
			return (
				<Stack key={lh} gap='0'>
					<Text className='is--sizeTip' fz='12px'>
						<code>{lh}</code>
					</Text>
					<DammyText lang={lang} length='m' lh={lh} />
				</Stack>
			);
		})}
	</>
);

export const LtsDemos = () => (
	<>
		{['s', 'base', 'l', 'xl'].map((lts, i) => {
			return (
				<Stack key={lts} gap='0'>
					<Text className='is--sizeTip' fz='12px'>
						<code>{lts}</code>
					</Text>
					<Text lts={lts}>Lorem Ipsum, 12345, ダミーの文字列</Text>
				</Stack>
			);
		})}
	</>
);

export const ShadowDemos = ({ shadows = [] }) => {
	return (
		<>
			{shadows.map((name) => {
				return (
					<Stack key={name} gap='20'>
						<Frame aspect='1/1' bgc='base' bxsh={`var(--shdw-${name})`} bdrs='s'>
							<Center h='100' ff='mono' fz='s' c='content-2'>
								{name}
							</Center>
						</Frame>
					</Stack>
				);
			})}
		</>
	);
};
export const BoxShadowDemos = ({ shadows = [] }) => {
	return (
		<>
			{shadows.map((name) => {
				return (
					<Stack key={name} gap='20'>
						{/* <Text bd='left' bdw='2px' lh='1' pl='20' fz='xs'>
							<code>{name}</code>
						</Text> */}
						<Frame aspect='1/1' bgc='base' bxsh={name} bdrs='s'>
							<Center h='100' ff='mono' fz='xs' c='content-2'>
								{name}
							</Center>
						</Frame>
					</Stack>
				);
			})}
		</>
	);
};

export const RadiusDemos = () => {
	return (
		<>
			{['xs', 's', 'm', 'l', 'xl', 'full'].map((r) => {
				return (
					<Stack key={r} gap='20'>
						{/* <Text bd='left' bdw='2px' lh='1' pl='20' fz='xs'>
							<code>{r}</code>
						</Text> */}
						<Frame aspect='1/1' bdrs={r} bd>
							<Center h='100' ff='mono' fz='xs' c='content-2'>
								{r}
							</Center>
						</Frame>
					</Stack>
				);
			})}
		</>
	);
};
export const SpacingDemos = ({ spaces, isValueLabel }) => {
	return (
		<>
			{spaces.map((s, i) => {
				const label = isValueLabel ? <code>{s}</code> : <code>{i}</code>;
				return (
					<Stack key={s} gap='5'>
						{!isValueLabel && (
							<Text bd='left' bdw='2px' lh='1' pl='10' fz='2xs'>
								{s}
							</Text>
						)}
						<Box pl={s} bgc='main'>
							<Text bgc='base' pl={10} fz='xs'>
								{label}
							</Text>
						</Box>
					</Stack>
				);
			})}
		</>
	);
};

// export const FiboCalcDemos = ({ unit }) => {
// 	return (
// 		<>
// 			{[0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89].map((num, i) => {
// 				let space = num * unit;

// 				return (
// 					<Stack key={num} gap='5'>
// 						<Text bd='left' bdw='2px' lh='1' pl='10' fz='2xs'>{`${space}rem`}</Text>
// 						<Box pl={`${space}rem`} bgc='content'>
// 							<Text bgc='base' pl={10} fz='xs'>
// 								<code>{`${num}`}</code>
// 							</Text>
// 						</Box>
// 					</Stack>
// 				);
// 			})}
// 		</>
// 	);
// };
// export const RatioCalcDemos = ({ ratio }) => {
// 	return (
// 		<>
// 			{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((s, i) => {
// 				const num = s - 5;
// 				let pl = 2;
// 				if (s === 0) {
// 					pl = 0;
// 				} else if (num > 0) {
// 					pl = 2 * Math.pow(ratio, num);
// 					pl = pl.toFixed(3);
// 				} else if (num < 0) {
// 					pl = 2 / Math.pow(ratio, num * -1);
// 					pl = pl.toFixed(3);
// 				}

// 				return (
// 					<Stack key={s} gap='5'>
// 						<Text bd='left' bdw='2px' lh='1' pl='10' fz='2xs'>{`${pl}rem`}</Text>
// 						<Box pl={`${pl}rem`} bgc='content'>
// 							<Text bgc='base' pl={10} fz='xs'>
// 								_
// 							</Text>
// 						</Box>
// 					</Stack>
// 				);
// 			})}
// 		</>
// 	);
// };
