import { Lism, Flex, Stack, Icon, Center } from '@lism-ui/core';
import notePresets from '@lism-ui/core/components/Callout/presets.js';

export function Note({ type = 'note', boxcolor, icon, title, children, isFlow, ...props }) {
	const presets = type ? notePresets[type] : null;
	if (presets) {
		boxcolor = boxcolor || presets?.color || null;
		icon = icon || presets?.icon || null;
	}

	return (
		<Stack
			lismClass='c--note'
			boxcolor={boxcolor}
			p='box'
			g='20'
			bd='is'
			bdc='boxcolor'
			bdw='4px'
			bdrs='xs'
			{...props}
		>
			{title && (
				<Flex className='c--note__head' fw='bold' ai='c' g='10' skipState>
					<Center className='c--note__icon' fz='xl' c='boxcolor' skipState>
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
