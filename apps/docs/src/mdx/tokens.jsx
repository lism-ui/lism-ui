import { Box, Text, Stack, Frame, Center, Grid, Dummy } from '@lism-ui/core';

export const FzDemos = ({ lang = 'ja' }) => (
	<Frame aspect='16/9' ovy='auto' isFlow='s'>
		{['2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl'].map((fz, i) => {
			return (
				<Stack key={fz} g='10'>
					<Text className='is--sizeT ip' fz='12px' lh='s'>
						<code>{fz}</code>
					</Text>
					<Dummy lang={lang} length='s' fz={fz} whs='nw' lh='1' />
				</Stack>
			);
		})}
	</Frame>
);

export const BoxShadowDemos = ({ shadows = [] }) => {
	return (
		<>
			{shadows.map((name) => {
				return (
					<Stack key={name} g='20'>
						<Frame aspect='1/1' bgc='base' bxsh={name} bdrs='2'>
							<Center h='100%' ff='mono' fz='xs' c='text-2'>
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
					<Stack key={r} g='20'>
						{/* <Text bd='left' bdw='2px' lh='1' pl='20' fz='xs'>
							<code>{r}</code>
						</Text> */}
						<Frame aspect='1/1' bdrs={r} bd>
							<Center h='100%' ff='mono' fz='xs' c='text-2'>
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
					<Stack key={s} g='5'>
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
// 					<Stack key={num} g='5'>
// 						<Text bd='left' bdw='2px' lh='1' pl='10' fz='2xs'>{`${space}rem`}</Text>
// 						<Box pl={`${space}rem`} bgc='text'>
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
// 					<Stack key={s} g='5'>
// 						<Text bd='left' bdw='2px' lh='1' pl='10' fz='2xs'>{`${pl}rem`}</Text>
// 						<Box pl={`${pl}rem`} bgc='text'>
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
