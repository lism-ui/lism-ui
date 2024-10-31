import { Lism, Flex, Stack, Icon, Center } from '@lism-ui/core';
import PRESETS from './presets.js';

export default function Note({
	type = 'note',
	keycolor,
	icon,
	title,
	children,
	isFlow = 's',
	...props
}) {
	const presets = type ? PRESETS[type] : null;
	if (presets) {
		keycolor = keycolor || presets?.color || null;
		icon = icon || presets?.icon || null;
	}

	return (
		<Stack
			lismClass='c--note u--colored'
			keycolor={keycolor}
			p='30'
			g='20'
			bd='is'
			bdc='keycolor'
			bdw='4px'
			bdrs='2px'
			{...props}
		>
			{title && (
				<Flex className='c--note__head' fw='bold' ai='c' g='10' skipState>
					<Center className='c--note__icon' fz='xl' c='keycolor' skipState>
						<Icon icon={icon} />
					</Center>
					<span className='c--note__title'>{title}</span>
				</Flex>
			)}
			<Lism className='c--note__body' isFlow={isFlow}>
				{children}
			</Lism>
		</Stack>
	);
}
