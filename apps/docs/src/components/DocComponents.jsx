import { Text, Icon } from '@lism-ui/core';
import Callout from '~/components/ex/Callout/index.jsx';
import Badge from '~/components/ex/Badge/index.jsx';
import ICON_PRESETS from '~/components/ex/Callout/presets.js';

import {
	// Book as Book,
	Notebook as Book,
	// BookOpenText as Book,
	// BookBookmark as Book,
} from '@phosphor-icons/react';

export const HelpText = ({ tag = 'p', children, ...props }) => {
	const _props = { tag, c: 'text-2', lh: 's', fz: 's' };
	if (tag === 'small') {
		_props.d = 'b';
		_props.fz = 'xs';
	} else {
		_props.mbs = '20';
	}
	return (
		<Text {..._props} {...props}>
			{children}
		</Text>
	);
};

export const IconBadge = ({ type = 'info' }) => {
	const presetData = type ? ICON_PRESETS[type] : null;
	return <Icon icon={presetData?.icon} variant='inline' c={presetData?.color} />;
	// return (
	// 	<Lism tag='span' d='if' c={c} bd bdrs='1' p='2px'>
	// 		<Icon icon={icon} />
	// 	</Lism>
	// );
};

export function Reference({ children }) {
	return (
		<Callout icon={Book} keycolor='purple'>
			{children}
		</Callout>
	);
}

export const MemoBadge = ({ children, color = 'orange', ...props }) => {
	return (
		<Badge fz='s' lh='1' p='5' isColored keycolor={color} {...props}>
			{children}
		</Badge>
	);
};
export const PropBadge = ({ type = '', ...props }) => {
	let keycolor = 'blue';
	if (type === 'attr') {
		keycolor = 'green';
	} else if (type === 'cssvar') {
		keycolor = 'purple';
	}
	return (
		<Badge
			variant='prop'
			fz='xs'
			ff='mono'
			lh='xs'
			m='5'
			bdrs='1'
			whs='nw'
			isColored
			keycolor={keycolor}
			{...props}
		/>
	);
};
