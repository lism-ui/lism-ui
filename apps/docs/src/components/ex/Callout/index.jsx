import { Lism, WithSide, Center, Icon } from '@lism-ui/core';
import PRESETS from './presets';

export default function Callout({ type = 'alert', keycolor, icon, isFlow, children, ...props }) {
	const presetData = type ? PRESETS[type] : null;
	const _icon = icon || presetData?.icon || 'info';
	const _color = keycolor || presetData?.color || 'currentColor';

	return (
		<WithSide
			lismClass='c--callout u--colored'
			keycolor={_color}
			p='20'
			g='20'
			bd
			bdrs='2'
			{...props}
		>
			<Center isSide lismClass='c--callout__icon' c='keycolor' fz='xl' p='5'>
				<Icon icon={_icon} />
			</Center>
			<Lism lismClass='c--callout__body' isFlow={isFlow}>
				{children}
			</Lism>
		</WithSide>
	);
}
